import React, { FC } from 'react'
import HeroSection from '../../sections/Hero/HeroSection'
import AboutMeSection from '@/sections/AboutMeSection/AboutMeSection'

import styles from './HomePage.module.scss'

const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <AboutMeSection />
    </div>
  )
}

export default HomePage
