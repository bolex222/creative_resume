import React, { FC } from 'react'
import WaveSvg from '@/components/svg/WaveSvg'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import SectionHeading from '@/components/text/SectionHeading/SectionHeading'
import { Color } from '@/type/globalTypes'
import ExperienceArticle from '@/components/text/ExperienceArticle/ExperienceArticle'
import styles from './Experience.module.scss'
import LocomotiveScrollSection from '@/locomotiveScroll/LocomotiveScrollSection'

const ExperienceSection: FC = () => {
  return (
    <LocomotiveScrollSection className={styles.ExperienceSection}>
      <GrainyOverlay />
      <WaveSvg />
      <SectionHeading
        heading="Experiences"
        color={Color.greyishLight}
        containerClassName={styles.headingContainer}
      />
      <div className={styles.articlesContainer}>
        <ExperienceArticle
          scrollSpeed={3}
          heading="Superhero Cheesecake / Mediamonks"
        >
          In 2021-2022 I did a 5 months internship at Superhero Cheesecake in
          Amsterdam as a frontend developer (Nextjs, VueJs, Gsap, SCSS). during
          the internship I worked on traineeships.monks.com.
        </ExperienceArticle>
        <ExperienceArticle scrollSpeed={3} heading="Internship at Phenix Info">
          In 2021 I did a 4 months internship at Phenix info in Lyon as a
          fullstack developer (FATFREE PHP, JS, CSS, HTML, MYSQL
        </ExperienceArticle>
        <ExperienceArticle
          scrollSpeed={3}
          thematicBreak={false}
          heading="Internship / fixed-term contract at My Home Tendance"
        >
          In 2020 I did a 4 months internship and 1 months fixed term contract
          at My Home Tendance as a fullstack developer (HTML, CSS, JS, PHP and
          MYSQL)
        </ExperienceArticle>
      </div>
    </LocomotiveScrollSection>
  )
}

export default ExperienceSection
