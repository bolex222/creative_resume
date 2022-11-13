import React, { useLayoutEffect, useRef } from 'react'
import styles from './AnimatedHeadline.module.scss'
import { gsap } from 'gsap'
import Context = gsap.Context

const AnimatedHeadline = () => {
  const paragraphContentRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const animationContext: Context = gsap.context(() => {
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
    return () => animationContext.revert()
  }, [])

  return (
    <p className={styles.headline}>
      <span className={styles.headlineContent} ref={paragraphContentRef}>
        French student looking to become a creative frontend developer
      </span>
    </p>
  )
}

export default AnimatedHeadline
