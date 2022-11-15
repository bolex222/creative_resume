import React, { FC } from 'react'
import styles from './ExperienceArticle.module.scss'

type Props = {
  heading: string
  containerClassName?: string
  children: string
  thematicBreak?: boolean
}
const ExperienceArticle: FC<Props> = ({
  heading,
  children,
  containerClassName,
  thematicBreak = true
}) => {
  return (
    <>
      <article
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
