import React from 'react'
import HeroSection from './Hero/HeroSection'
import AboutMeSection from '@/pages/home/AboutMeSection/AboutMeSection'

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
