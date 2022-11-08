import React from 'react'
import AnimatedText from '@/components/text/AnimatedText'
import YearSvg from '@/components/svg/YearSvg'
import HeroBackground from '@/pages/home/Hero/HeroBackground'
import ScrollDownButton from '@/components/Buttons/ScrollDownButton'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <HeroBackground />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          <AnimatedText
            className={styles.heading_name}
            text="Basile LECOUTURIER"
          />
          <div className={styles.yearSvgWrapper}>
            <YearSvg />
          </div>
        </h1>
        <p className={styles.headline}>
          French student looking to become a creative frontend developer
        </p>
        {/*year svg container for apparition animation*/}
        <ScrollDownButton />
      </div>
      <div className={styles.grainyOverlayContainer} />
    </section>
  )
}

export default HeroSection
