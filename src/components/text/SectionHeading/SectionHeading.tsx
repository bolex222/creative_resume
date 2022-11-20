import React, { FC, useRef } from 'react'
import { Color } from '@/type/globalTypes'

import styles from './SectionHeading.module.scss'
import useGsap from '@/GSAP/hook/useGsap'
import { gsap } from 'gsap'

type Props = {
  containerClassName?: string
  heading: string
  color: Color
}

const getClassNameDependingOnColor = (color: Color): string => {
  switch (color) {
    case Color.blueish:
      return styles.bluishColor
    case Color.greyishLight:
      return styles.greyishColor
    default:
      return ''
  }
}

const SectionHeading: FC<Props> = ({ color, heading, containerClassName }) => {
  const headingSpanRef = useRef<HTMLSpanElement | null>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useGsap(() => {
    gsap.fromTo(
      headingSpanRef.current,
      { translateY: '150%' },
      {
        translateY: '0%',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingSpanRef.current,
          start: '-=50% bottom'
        }
      }
    )
  })

  return (
    <div
      ref={headingRef}
      className={`${styles.sectionHeadingContainer} ${
        containerClassName ? containerClassName : ''
      }`}
    >
      <h2
        className={`${styles.sectionHeading} ${getClassNameDependingOnColor(
          color
        )}`}
      >
        <span className={styles.headingSpan} ref={headingSpanRef}>
          {heading}
        </span>
      </h2>
    </div>
  )
}

export default SectionHeading
