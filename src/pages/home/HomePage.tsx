import React, { FC } from 'react'
import HeroSection from '@/sections/Hero/HeroSection'
import AboutMeSection from '@/sections/AboutMeSection/AboutMeSection'
import ExperienceSection from '@/sections/ExperienceSection/ExperienceSection'
import LocomotiveScrollContainer from '@/locomotiveScroll/LocomotiveScrollContainer'
import StudiesSection from '@/sections/StudiesSection/StudiesSection'
import Footer from '@/components/Footer/Footer'
import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <LocomotiveScrollContainer>
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <div id="bgScrollRef" />
        <StudiesSection />
        <Footer />
      </LocomotiveScrollContainer>
    </div>
  )
}

export default HomePage
