import React, { FC, useRef } from 'react'
import { gsap } from 'gsap'
import svgUrl from '@/public/loop.svg'
import styles from './LoopSvg.module.scss'
import useGsap from '@/GSAP/hook/useGsap'

const LoopSvg: FC = () => {
  const svg = useRef(null)

  const parallaxScrollAnimation = (): void => {
    gsap.fromTo(
      svg.current,
      { translateY: 0 },
      {
        translateY: '15%',
        scrollTrigger: {
          trigger: svg.current,
          start: 'middle middle',
          end: 'bottom top',
          scrub: 2
        }
      }
    )
  }

  useGsap(() => {
    const t1 = gsap.timeline()
    t1.fromTo(
      svg.current,
      {
        translateX: '100%',
        translateY: '-50%'
      },
      {
        translateX: '0%',
        translateY: '0%',
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
        onComplete: parallaxScrollAnimation
      }
    )
  })

  return <img ref={svg} className={styles.loopShape} src={svgUrl} alt="" />
}

export default LoopSvg
