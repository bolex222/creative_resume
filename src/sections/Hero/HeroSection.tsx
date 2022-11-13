import React from 'react'
import AnimatedText from '@/components/text/AnimatedText'
import YearSvg from '@/components/svg/YearSvg'
import HeroBackground from '@/sections/Hero/HeroBackground'
import ScrollDownButton from '@/components/Buttons/ScrollDownButton'
import AnimatedHeadline from '@/components/text/AnimatedHeadline'
import styles from './HeroSection.module.scss'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'

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
        <AnimatedHeadline />
        <ScrollDownButton />
      </div>
      <GrainyOverlay />
    </section>
  )
}

export default HeroSection
