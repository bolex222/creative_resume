import React from 'react'
import styles from './FramedImage.module.scss'

const FramedImage = () => {
  return (
    <div className={styles.framesWrapper}>
      <img
        src="/src/public/000010 1.png"
        className={styles.framedImage}
        alt="photo of me holding a camera"
      />
      <div className={[styles.frames, styles.firstFrame].join(' ')} />
      <div className={[styles.frames, styles.secondFrame].join(' ')} />
    </div>
  )
}

export default FramedImage
