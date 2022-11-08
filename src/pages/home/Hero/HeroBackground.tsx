import React from 'react'
import BgSvgForGradient1 from '@/components/svg/BgSvgForGradient1'
import BgSvgForGradient2 from '@/components/svg/BgSvgForGradient2'
import RepeatedSvg from '@/components/svg/RepeatedSvg'
import LoopSvg from '@/components/svg/LoopSvg'
import styles from '@/pages/home/Hero/HeroBackground.module.scss'

const HeroBackground = () => {
  return (
    <div className={styles.background}>
      <div className={styles.blurBackground} />
      <BgSvgForGradient1 className={styles.blueSvg} />
      <BgSvgForGradient2 className={styles.purpleSvg} />
      <RepeatedSvg />
      <LoopSvg />
    </div>
  )
}

export default HeroBackground
