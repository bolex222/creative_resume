import React, { FC, useRef } from 'react'
import styles from './AnimatedHeadline.module.scss'
import { gsap } from 'gsap'
import useGsap from '@/GSAP/hook/useGsap'

const AnimatedHeadline: FC = () => {
  const paragraphContentRef = useRef<HTMLSpanElement>(null)

  useGsap(() => {
    gsap.fromTo(
      paragraphContentRef.current,
      { translateY: '150%' },
      {
        translateY: '0%',
        duration: 0.5,
        ease: 'power1.out',
        delay: 1
      }
    )
  })

  return (
    <p className={styles.headline}>
      <span className={styles.headlineContent} ref={paragraphContentRef}>
        French junior developer looking to become a creative front-end
        developer.
      </span>
    </p>
  )
}

export default AnimatedHeadline
