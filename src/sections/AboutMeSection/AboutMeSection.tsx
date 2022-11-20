import React, { FC, useRef } from 'react'
import { Color } from '@/type/globalTypes'
import SectionHeading from '@/components/text/SectionHeading/SectionHeading'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import FramedImage from '@/sections/AboutMeSection/FramedImage/FramedImage'
import styles from './AboutMeSection.module.scss'
import LocomotiveScrollSection from '@/locomotiveScroll/LocomotiveScrollSection'
import useGsap from '@/GSAP/hook/useGsap'
import { gsap } from 'gsap'

const AboutMeSection: FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useGsap(() => {
    gsap.fromTo(
      paragraphRef.current,
      { translateY: '-10%' },
      {
        translateY: '10%',
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  })

  return (
    <LocomotiveScrollSection className={styles.aboutMeSection}>
      <GrainyOverlay />
      <SectionHeading
        containerClassName={styles.sectionHeadingContainer}
        heading="About me"
        color={Color.blueish}
      />
      <p className={styles.aboutMeParagraph} ref={paragraphRef}>
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
    </LocomotiveScrollSection>
  )
}

export default AboutMeSection
