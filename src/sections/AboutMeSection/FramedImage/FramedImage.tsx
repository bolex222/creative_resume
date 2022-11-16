import React, { FC, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './FramedImage.module.scss'
import imageUrl from '@/public/000010 1.png'

const FramedImage: FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const frame1Ref = useRef<HTMLImageElement | null>(null)
  const frame2Ref = useRef<HTMLImageElement | null>(null)

  useLayoutEffect(() => {
    const elemArray = [imageRef.current, frame1Ref.current, frame2Ref.current]
    const gsapContext: gsap.Context = gsap.context(() => {
      for (let i = 0; i < elemArray.length; i++) {
        gsap.fromTo(
          elemArray[i],
          { rotate: '-10deg' },
          {
            rotate: '+10deg',
            duration: 5,
            delay: 0.3,
            stagger: 1,
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: i + 1
            }
          }
        )
      }
    })
    return () => gsapContext.revert()
  }, [])

  return (
    <div className={styles.framesWrapper}>
      <img
        src={imageUrl}
        className={styles.framedImage}
        alt="photo of me holding a camera"
        ref={imageRef}
      />
      <div
        ref={frame1Ref}
        className={[styles.frames, styles.firstFrame].join(' ')}
      />
      <div
        ref={frame2Ref}
        className={[styles.frames, styles.secondFrame].join(' ')}
      />
    </div>
  )
}

export default FramedImage
