import React, { FC, useRef } from 'react'
import { gsap } from 'gsap'
import useGsap from '@/GSAP/hook/useGsap'
import styles from './ExperienceArticle.module.scss'

type Props = {
  heading: string
  containerClassName?: string
  children: string
  thematicBreak?: boolean
  scrollSpeed?: number
}
const ExperienceArticle: FC<Props> = ({
  heading,
  children,
  containerClassName
}) => {
  const articleRef = useRef<HTMLElement | null>(null)

  useGsap(() => {
    gsap.fromTo(
      articleRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: articleRef.current,
          start: 'top 75%'
        }
      }
    )
    gsap.fromTo(
      articleRef.current,
      { translateY: '-15%' },
      {
        translateY: '15%',
        ease: 'power3.out,',
        scrollTrigger: {
          trigger: articleRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    )
  })
  return (
    <article
      ref={articleRef}
      className={`${styles.wrapper} ${
        containerClassName ? containerClassName : ''
      }`}
    >
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.paragraph}>{children}</p>
    </article>
  )
}

export default ExperienceArticle
