import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import useSetUpScrollTrigger from '@/gsapScrollTrigger/useSetUpScrollTrigger'

const useLocomotiveScroll = (containerRef: React.RefObject<HTMLElement>) => {
  const LocomotiveScrollRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (containerRef.current !== null) {
      LocomotiveScrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true
      })
      useSetUpScrollTrigger(LocomotiveScrollRef)
    }
  }, [])
  return [LocomotiveScrollRef]
}

export default useLocomotiveScroll
