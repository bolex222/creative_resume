import React, { FC, useRef } from 'react'
import { gsap } from 'gsap'
import svgUrl from '@/public/loop.svg'
import styles from './LoopSvg.module.scss'
import useGsap from '@/GSAP/hook/useGsap'

const LoopSvg: FC = () => {
  const svg = useRef(null)

  /**
   * Create and run apparition gsap animation
   */
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
        duration: 0.7,
        delay: 0.8,
        ease: 'power1.out'
      }
    )
  })

  return <img ref={svg} className={styles.loopShape} src={svgUrl} alt="" />
}

export default LoopSvg
