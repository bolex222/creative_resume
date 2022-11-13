import React from 'react'
import { Color } from '@/type/globalTypes'
import SectionHeading from '@/components/text/SectionHeading/SectionHeading'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import styles from './AboutMeSection.module.scss'
import FramedImage from '@/sections/AboutMeSection/FramedImage/FramedImage'

const AboutMeSection = () => {
  return (
    <section className={styles.aboutMeSection}>
      <GrainyOverlay />
      <SectionHeading
        containerClassName={styles.sectionHeadingContainer}
        heading="About me"
        color={Color.blueish}
      />
      <p className={styles.aboutMeParagraph}>
        <span>Hi !</span> I’m Basile, a French IT engineer student interested in
        creative frontend development. I am currently looking for a 6 months
        internship from January 2023 . I would like to find a company with an
        organized development and creative team. Passionate by web development
        and its technologies, I would very much like to works on current web
        technologies and discover some new tools, languages, framework, and
        projects architectures. I am curious and I am not afraid of giving ideas
        and my opinions.
      </p>
      <FramedImage />
    </section>
  )
}

export default AboutMeSection
