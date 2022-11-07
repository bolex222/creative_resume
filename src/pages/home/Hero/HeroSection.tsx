import React from 'react'
import AnimatedText from '@/components/text/AnimatedText'
import YearSvg from '@/components/svg/YearSvg'
import HeroBackground from '@/pages/home/Hero/HeroBackground'
import styles from './HeroSection.module.scss'
import ScrollDownButton from '@/components/Buttons/ScrollDownButton'

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <HeroBackground />
      <h1 className={styles.title}>
        <AnimatedText text="Basile LECOUTURIER" />
      </h1>
      {/*year svg container for apparition animation*/}
      <div>
        <YearSvg />
      </div>
      <ScrollDownButton />
      <div className={styles.grainyOverlayContainer} />
    </section>
  )
}

export default HeroSection
