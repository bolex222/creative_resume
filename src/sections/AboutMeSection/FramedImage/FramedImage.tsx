import React, { FC, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './FramedImage.module.scss'
import imageUrl from '@/public/000010 1.png'
import useGsap from '@/GSAP/hook/useGsap'

const FramedImage: FC = () => {
  const container = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const frame1Ref = useRef<HTMLImageElement | null>(null)
  const frame2Ref = useRef<HTMLImageElement | null>(null)

  useGsap(() => {
    gsap.to(container.current, {
      translateY: '20%',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
    const elemArray = [imageRef.current, frame1Ref.current, frame2Ref.current]
    for (let i = 0; i < elemArray.length; i++) {
      gsap.fromTo(
        elemArray[i],
        { rotate: `${-25 + (i + 1) * 6}deg` },
        {
          rotate: `${-5 + (i + 1) * 6}deg`,
          duration: 5,
          delay: 0.3,
          stagger: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: i * 2 + 1
          }
        }
      )
    }
  })
  return (
    <div className={styles.framesWrapper} ref={container}>
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
