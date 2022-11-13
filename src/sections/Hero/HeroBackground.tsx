import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import BgSvgForGradient1 from '@/components/svg/BgSvgForGradient1'
import BgSvgForGradient2 from '@/components/svg/BgSvgForGradient2'
import RepeatedSvg from '@/components/svg/RepeatedSvg'
import LoopSvg from '@/components/svg/LoopSvg'
import styles from '@/sections/Hero/HeroBackground.module.scss'

const HeroBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const blueSvg = useRef<SVGSVGElement>(null)
  const purpleSvg = useRef<SVGSVGElement>(null)

  const transformGradient = (event: MouseEvent) => {
    if (blueSvg.current && purpleSvg.current && backgroundRef.current) {
      const normalizedHorizontalMousePosition: number =
        event.x / backgroundRef.current.offsetWidth
      const normalizedVerticalMousePosition: number =
        event.y / backgroundRef.current.offsetHeight
      gsap.to(blueSvg.current, {
        translateX: normalizedHorizontalMousePosition * 100 * -1,
        translateY: normalizedVerticalMousePosition * 100 * -1,
        ease: 'power3.out',
        duration: 0.3
      })
      gsap.to(purpleSvg.current, {
        translateX: normalizedHorizontalMousePosition * 100,
        translateY: normalizedVerticalMousePosition * 100,
        ease: 'power3.out',
        duration: 0.3
      })
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', transformGradient)
    return () => {
      document.removeEventListener('mousemove', transformGradient)
    }
  }, [])

  return (
    <div ref={backgroundRef} className={styles.background}>
      <div className={styles.blurBackground} />
      <BgSvgForGradient1 ref={blueSvg} className={styles.blueSvg} />
      <BgSvgForGradient2 ref={purpleSvg} className={styles.purpleSvg} />
      <RepeatedSvg />
      <LoopSvg />
    </div>
  )
}

export default HeroBackground
