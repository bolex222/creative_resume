import React, { FC, useEffect, useRef } from 'react'
import HeroSection from '../../sections/Hero/HeroSection'
import AboutMeSection from '@/sections/AboutMeSection/AboutMeSection'
import ExperienceSection from '@/sections/ExperienceSection/ExperienceSection'
import useLocomotiveScroll from '@/locomotiveScroll/locomotiveScrollHook'
import styles from './HomePage.module.scss'
import LocomotiveScrollContainer from '@/locomotiveScroll/LocomotiveScrollContainer'

const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <LocomotiveScrollContainer>
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
      </LocomotiveScrollContainer>
    </div>
  )
}

export default HomePage
