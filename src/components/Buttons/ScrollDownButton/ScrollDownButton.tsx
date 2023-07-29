import React, { FC, useRef } from 'react'
import { gsap } from 'gsap'
import useGsap from '@/GSAP/hook/useGsap'
import styles from './ScrollDownButton.module.scss'

const ScrollDownButton: FC = () => {
  const buttonRef = useRef(null)
  const arrowRef = useRef(null)

  const hoverTimeline = useRef<gsap.core.Timeline | null>(null)

  useGsap(() => {
    const t1 = gsap.timeline()
    hoverTimeline.current = gsap.timeline({ paused: true })
    t1.set(arrowRef.current, { opacity: 0, translateY: '-100%' })
    t1.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.6, delay: 1, ease: 'power1.out' }
    )
    t1.to(
      arrowRef.current,
      { opacity: 1, translateY: 0, duration: 0.6, ease: 'power1.out' },
      '-=0.3'
    )

    hoverTimeline.current.to(arrowRef.current, {
      translateY: '2rem',
      duration: 0.7,
      ease: 'power3.out'
    })
  })

  const handleMouseEnter = (): void => {
    if (hoverTimeline.current && arrowRef.current) {
      hoverTimeline.current.play()
    }
  }

  const handleMouseLeave = (): void => {
    if (hoverTimeline.current && arrowRef.current) {
      hoverTimeline.current.reverse()
    }
  }

  return (
    <div className={styles.scrollCircleWrapper}>
      <a
        href="#aboutme"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
        className={styles.scrollCircle}
      >
        <h3 className={styles.scrollCircleHeading}>scroll</h3>
      </a>
      <svg
        ref={arrowRef}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={styles.scrollCircleSvg}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
        />
      </svg>
    </div>
  )
}

export default ScrollDownButton
