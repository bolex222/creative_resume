import React from 'react'
import HeroSection from '../../sections/Hero/HeroSection'
import AboutMeSection from '@/sections/AboutMeSection/AboutMeSection'

import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <AboutMeSection />
    </div>
  )
}

export default HomePage
