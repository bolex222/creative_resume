import React, { FC } from 'react'
import styles from './FramedImage.module.scss'
import imageUrl from '@/public/000010 1.png'

const FramedImage: FC = () => {
  return (
    <div className={styles.framesWrapper}>
      <img
        src={imageUrl}
        className={styles.framedImage}
        alt="photo of me holding a camera"
      />
      <div className={[styles.frames, styles.firstFrame].join(' ')} />
      <div className={[styles.frames, styles.secondFrame].join(' ')} />
    </div>
  )
}

export default FramedImage
