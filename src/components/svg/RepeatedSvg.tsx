import React, { FC, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import svgUrl from '@/public/shape repeated 1.svg'
import styles from './RepeatedSvg.module.scss'

const RepeatedSvg: FC = () => {
  const svg = useRef(null)

  useLayoutEffect(() => {
    const animationContext = gsap.context(() => {
      const animationTimeline = gsap.timeline()
      animationTimeline.fromTo(
        svg.current,
        { translateY: '100%', opacity: 0 },
        {
          translateX: '0%',
          opacity: 1,
          duration: 0.8,
          delay: 0.6,
          ease: 'power1.out'
        },
        0
      )
      animationTimeline.fromTo(
        svg.current,
        { translateX: '-30%' },
        { translateY: '0%', duration: 0.8, delay: 0.7, ease: 'power3.out' },
        0
      )
    })
    return () => animationContext.revert()
  }, [])

  return <img ref={svg} className={styles.repeatedShape} src={svgUrl} alt="" />
}

export default RepeatedSvg
