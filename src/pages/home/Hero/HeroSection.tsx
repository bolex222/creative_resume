import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Context = gsap.Context
import AnimatedText from '@/components/text/AnimatedText'
import YearSvg from '@/components/svg/YearSvg'
import HeroBackground from '@/pages/home/Hero/HeroBackground'
import ScrollDownButton from '@/components/Buttons/ScrollDownButton'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const paragraphContentRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const animationContext: Context = gsap.context(() => {
      gsap.fromTo(
        paragraphContentRef.current,
        { translateY: '150%' },
        {
          translateY: '0%',
          duration: 0.5,
          ease: 'power1.out',
          delay: 1
        }
      )
    })
    return () => animationContext.revert()
  }, [])

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
          <span className={styles.headlineContent} ref={paragraphContentRef}>
            French student looking to become a creative frontend developer
          </span>
        </p>
        <ScrollDownButton />
      </div>
      <div className={styles.grainyOverlayContainer} />
    </section>
  )
}

export default HeroSection
