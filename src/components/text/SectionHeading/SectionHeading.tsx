import React, { FC } from 'react'
import { Color } from '@/type/globalTypes'

import styles from './SectionHeading.module.scss'

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
  return (
    <div
      className={`${styles.sectionHeadingContainer} ${
        containerClassName ? containerClassName : ''
      }`}
    >
      <h2
        className={`${styles.sectionHeading} ${getClassNameDependingOnColor(
          color
        )}`}
      >
        <span>{heading}</span>
      </h2>
    </div>
  )
}

export default SectionHeading
