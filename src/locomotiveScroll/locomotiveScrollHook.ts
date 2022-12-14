import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import useSetUpScrollTrigger from '@/GSAP/gsapScrollTrigger/useSetUpScrollTrigger'

const useLocomotiveScroll = (containerRef: React.RefObject<HTMLElement>) => {
  const LocomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (containerRef.current !== null) {
      LocomotiveScrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: false
      })
      useSetUpScrollTrigger(LocomotiveScrollRef, containerRef)
    }
  }, [])
  return [LocomotiveScrollRef]
}

export default useLocomotiveScroll
