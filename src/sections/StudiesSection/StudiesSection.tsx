import React, { FC, useRef } from 'react'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import SectionHeading from '@/components/text/SectionHeading/SectionHeading'
import { Color } from '@/type/globalTypes'
import ExperienceArticle from '@/components/text/ExperienceArticle/ExperienceArticle'
import useGsap from '@/GSAP/hook/useGsap'
import { gsap } from 'gsap'
import styles from './Studies.module.scss'

const StudiesSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGsap(() => {
    gsap.fromTo(
      sectionRef.current,
      { backgroundColor: '#1d2f6f' },
      {
        backgroundColor: '#1b1b1b',
        scrollTrigger: {
          trigger: '#bgScrollRef',
          start: 'top center',
          end: '+=40%',
          scrub: 2
        }
      }
    )
  })

  return (
    <section className={styles.studiesSection} ref={sectionRef}>
      <GrainyOverlay />
      <SectionHeading
        heading="Studies"
        color={Color.greyishLight}
        containerClassName={styles.headingContainer}
      />
      <div className={styles.articlesContainer}>
        <ExperienceArticle heading="Graduated IT Engineer">
          <ul>
            <li>
              In 2023, I graduated from the CESI IT engineering school in
              France. (5 years)
            </li>
            <li>
              Learned : Development, Networking, System administration, Project
              management, Cyber security and more.
            </li>
          </ul>
        </ExperienceArticle>
        <ExperienceArticle heading="French Baccalaureate">
          <ul>
            <li>BAC STI2D with honors</li>
            <li>Computer and digital system specialty</li>
          </ul>
        </ExperienceArticle>
      </div>
    </section>
  )
}

export default StudiesSection
