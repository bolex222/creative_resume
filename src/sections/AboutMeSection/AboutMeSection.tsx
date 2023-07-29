import React, { FC, useRef } from 'react'
import { Color } from '@/type/globalTypes'
import SectionHeading from '@/components/text/SectionHeading/SectionHeading'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import FramedImage from '@/sections/AboutMeSection/FramedImage/FramedImage'
import styles from './AboutMeSection.module.scss'
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
    <section id="aboutme" className={styles.aboutMeSection}>
      <GrainyOverlay />
      <SectionHeading
        containerClassName={styles.sectionHeadingContainer}
        heading="About me"
        color={Color.blueish}
      />
      <p className={styles.aboutMeParagraph} ref={paragraphRef}>
        <span>Hi !</span> I&apos;m Basile, a French IT engineer with a passion
        for creative frontend development. I recently graduated from CESI IT
        engineering school in France, and I am now looking for a full-time
        position. I am a highly motivated and results-oriented individual with a
        strong desire to learn and grow. I am also a team player and I am always
        willing to help others. I am passionate about using my skills and
        knowledge to create innovative and user-friendly web applications. I am
        also proficient in a variety of front-end technologies, including React,
        NextJs, Vue, Gsap, Sass, and beginner with ThreeJs. I am confident that
        I have the skills and experience necessary to be successful in a
        front-end development role. I am eager to start working on challenging
        and rewarding projects.
      </p>
      <FramedImage />
    </section>
  )
}

export default AboutMeSection
