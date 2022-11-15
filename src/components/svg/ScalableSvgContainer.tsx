import React, { FC } from 'react'
import styles from './ScalableSvgContainer.module.scss'

type Props = {
  className?: string
  children: JSX.Element
}
const ScalableSvgContainer: FC<Props> = ({ className, children }) => {
  return (
    <div className={`${className ? className : ''} ${styles.wrapper}`}>
      {children}
    </div>
  )
}

export default ScalableSvgContainer
