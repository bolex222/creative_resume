import React, { FC, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import styles from './ScrollDownButton.module.scss'

const ScrollDownButton: FC = () => {
  const buttonRef = useRef(null)
  const arrowRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
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
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.scrollCircleWrapper}>
      <div ref={buttonRef} className={styles.scrollCircle}>
        <h3 className={styles.scrollCircleHeading}>scroll</h3>
      </div>
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
