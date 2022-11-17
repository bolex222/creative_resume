import React, { FC } from 'react'
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
  containerClassName,
  thematicBreak = true,
  scrollSpeed = 1
}) => {
  return (
    <>
      <article
        data-scroll={true}
        data-scroll-speed={scrollSpeed}
        className={`${styles.wrapper} ${
          containerClassName ? containerClassName : ''
        }`}
      >
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.paragraph}>{children}</p>
      </article>
      {thematicBreak ? <hr className={styles.thematicBreak} /> : ''}
    </>
  )
}

export default ExperienceArticle
