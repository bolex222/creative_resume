import React, { FC, useEffect, useRef } from 'react'
import BgSvgForGradient1 from '@/components/svg/BgSvgForGradient1'
import BgSvgForGradient2 from '@/components/svg/BgSvgForGradient2'
import RepeatedSvg from '@/components/svg/RepeatedSvg'
import LoopSvg from '@/components/svg/LoopSvg'
import styles from '@/sections/Hero/HeroBackground.module.scss'
import { useRAFManager } from '@/utils/RafManager/RafManager'

const HeroBackground: FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const blueSvg = useRef<SVGSVGElement>(null)
  const purpleSvg = useRef<SVGSVGElement>(null)
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const prevMousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const { addFunction, removeFunction } = useRAFManager()

  const tick = () => {
    transformGradient()
  }

  const handleMouseMove = (event: MouseEvent) => {
    mousePositionRef.current = {
      x: event.x,
      y: event.y
    }
  }

  const transformGradient = () => {
    if (blueSvg.current && purpleSvg.current && backgroundRef.current) {
      // NORMALIZE
      const normalizedHorizontalMousePosition: number =
        mousePositionRef.current.x / backgroundRef.current.offsetWidth
      const normalizedVerticalMousePosition: number =
        mousePositionRef.current.y / backgroundRef.current.offsetHeight

      // LERP
      const smoothNormalizedHorizontalMousePosition: number =
        prevMousePositionRef.current.x +
        (normalizedHorizontalMousePosition - prevMousePositionRef.current.x) *
          0.01
      const smoothNormalizedVerticalMousePosition: number =
        prevMousePositionRef.current.y +
        (normalizedVerticalMousePosition - prevMousePositionRef.current.y) *
          0.01

      // POSITION
      const blueX = smoothNormalizedHorizontalMousePosition * 150 * -1
      const blueY = smoothNormalizedVerticalMousePosition * 150 * -1
      const purpleX = smoothNormalizedHorizontalMousePosition * 150
      const purpleY = smoothNormalizedVerticalMousePosition * 150

      // TRANSFORM
      blueSvg.current.style.transform = `translate3d(${blueX}px, ${blueY}px, 0)`
      purpleSvg.current.style.transform = `translate3d(${purpleX}px, ${purpleY}px, 0)`

      // UPDATE PREV
      prevMousePositionRef.current = {
        x: smoothNormalizedHorizontalMousePosition,
        y: smoothNormalizedVerticalMousePosition
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    addFunction(tick)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      removeFunction(tick)
    }
  }, [])

  return (
    <div ref={backgroundRef} className={styles.background}>
      <div className={styles.blurBackground} />
      <BgSvgForGradient1 ref={blueSvg} className={styles.blueSvg} />
      <BgSvgForGradient2 ref={purpleSvg} className={styles.purpleSvg} />
      <RepeatedSvg />
      <LoopSvg />
    </div>
  )
}

export default HeroBackground
