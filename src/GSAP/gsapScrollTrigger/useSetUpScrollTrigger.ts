import React from 'react'
import LocomotiveScroll, { ScrollToTarget } from 'locomotive-scroll'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// I KNOW THERE ARE SOME TS IGNORE BUT IT SEEMS THAT LOCOMOTIVE SCROLL + DOM ISN'T SUPER WELL TYPED

const useSetUpScrollTrigger = (
  locoScrollRef: React.RefObject<LocomotiveScroll>,
  scrollContainer: React.RefObject<HTMLElement>
) => {
  locoScrollRef.current?.on('scroll', ScrollTrigger.update)

  ScrollTrigger.scrollerProxy(scrollContainer.current, {
    scrollTop(value) {
      return arguments.length
        ? locoScrollRef.current?.scrollTo(value as ScrollToTarget, {
            duration: 0,
            disableLerp: true
          })
        : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          locoScrollRef.current?.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pinType: document.querySelector('#loco_scroll_container')?.style.transform
      ? 'transform'
      : 'fixed'
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ScrollTrigger.addEventListener('refresh', () => locoScrollRef.current?.update)
  ScrollTrigger.defaults({ scroller: scrollContainer.current })
  ScrollTrigger.refresh()
}

export default useSetUpScrollTrigger
