import React, { FC, MouseEvent, useRef } from 'react'
import styles from './AnimatedLink.module.scss'
import useGsap from '@/GSAP/hook/useGsap'
import { gsap } from 'gsap'

type Props = {
  link: string
  download?: boolean
  children: React.ReactNode
}

const AnimatedLink: FC<Props> = ({ link, download = false, children }) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const gsapTimeline = useRef<gsap.core.Timeline | null>(null)

  useGsap(() => {
    gsapTimeline.current = gsap.timeline({ paused: true })
    gsapTimeline.current.fromTo(
      circleRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.7 }
    )
  })

  const handleMouseEnter = (event: MouseEvent) => {
    if (circleRef.current && linkRef.current && gsapTimeline.current) {
      const linkBounding = linkRef.current.getBoundingClientRect()
      circleRef.current.style.left = `calc(${
        event.clientX - linkBounding.x
      }px - (25rem))`
      circleRef.current.style.top = `calc(${
        event.clientY - linkBounding.y
      }px - (25rem))`
      gsapTimeline.current.play()
    }
  }

  const handleMouseLeave = () => {
    if (gsapTimeline.current) {
      gsapTimeline.current.reverse()
    }
  }

  return (
    <a
      href={link}
      download={download}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.downloadButton}
    >
      <div className={styles.hoverCircle} ref={circleRef} />
      <span className={styles.textWrapper}>{children}</span>
    </a>
  )
}

export default AnimatedLink
