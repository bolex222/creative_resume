import React, { FC, useRef } from 'react'
import { gsap } from 'gsap'

import styles from './LetterFromTheBottom.module.scss'
import useGsap from '@/GSAP/hook/useGsap'

type Props = {
  className: string
  children: JSX.Element
  letterIndex: number
}

const LetterFromTheBottom: FC<Props> = ({ letterIndex, children }) => {
  const letterSpan = useRef(null)

  useGsap(() => {
    gsap.to(letterSpan.current, {
      translateY: '0',
      rotate: '0',
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
      delay: letterIndex / 40
    })
  })

  return (
    <span
      key={`letter_${letterIndex}`}
      className={styles.letter}
      ref={letterSpan}
    >
      {children}
    </span>
  )
}

export default LetterFromTheBottom
