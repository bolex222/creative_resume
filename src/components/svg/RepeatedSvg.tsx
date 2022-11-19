import React, { FC, useRef } from 'react'
import gsap from 'gsap'
import svgUrl from '@/public/shape repeated 1.svg'
import styles from './RepeatedSvg.module.scss'
import useGsap from '@/GSAP/hook/useGsap'

const RepeatedSvg: FC = () => {
  const svg = useRef<HTMLImageElement | null>(null)

  const parallaxScrollAnimation = (): void => {
    gsap.fromTo(
      svg.current,
      { translateY: 0 },
      {
        translateY: '25%',
        scrollTrigger: {
          trigger: svg.current,
          start: 'middle middle',
          end: 'bottom top',
          scrub: 1
        }
      }
    )
  }

  useGsap(() => {
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
      {
        translateY: '0%',
        duration: 0.8,
        delay: 0.7,
        ease: 'power3.out',
        onComplete: parallaxScrollAnimation
      },
      0
    )
  })

  return <img ref={svg} className={styles.repeatedShape} src={svgUrl} alt="" />
}

export default RepeatedSvg
