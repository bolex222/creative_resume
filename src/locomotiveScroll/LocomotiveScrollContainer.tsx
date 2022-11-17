import React, { FC, useRef } from 'react'
import useLocomotiveScroll from '@/locomotiveScroll/locomotiveScrollHook'
import styles from './LocomotiveScrollContainer.module.scss'
import useSetUpScrollTrigger from '@/GSAP/gsapScrollTrigger/useSetUpScrollTrigger'

type Props = {
  children: React.ReactNode
}
const LocomotiveScrollContainer: FC<Props> = ({ children }) => {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const locomotiveScroll = useLocomotiveScroll(scrollContainer)

  return (
    <div
      ref={scrollContainer}
      data-scroll-container
      className={`loco_scroll ${styles.locomotiveScrollContainer}`}
      id="loco_scroll_container"
    >
      {children}
    </div>
  )
}

export default LocomotiveScrollContainer
