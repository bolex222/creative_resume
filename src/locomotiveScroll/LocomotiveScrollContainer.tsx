import React, { FC } from 'react'
import styles from './LocomotiveScrollContainer.module.scss'

type Props = {
  children: React.ReactNode
}
const LocomotiveScrollContainer: FC<Props> = ({ children }) => {
  // const scrollContainer = useRef<HTMLDivElement>(null)
  // const locomotiveScroll = useLocomotiveScroll(scrollContainer)

  return (
    <div
      // ref={scrollContainer}
      data-scroll-container={true}
      className={`loco_scroll ${styles.locomotiveScrollContainer}`}
      id="loco_scroll_container"
    >
      {children}
    </div>
  )
}

export default LocomotiveScrollContainer
