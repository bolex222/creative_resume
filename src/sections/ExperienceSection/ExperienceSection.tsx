import React, { FC, useRef } from 'react'
import WaveSvg from '@/components/svg/WaveSvg'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import SectionHeading from '@/components/text/SectionHeading/SectionHeading'
import { Color } from '@/type/globalTypes'
import ExperienceArticle from '@/components/text/ExperienceArticle/ExperienceArticle'
import useGsap from '@/GSAP/hook/useGsap'
import { gsap } from 'gsap'
import styles from './Experience.module.scss'
import ExternalLink from '@/components/Buttons/ExternalLink/ExternalLink'

const ExperienceSection: FC = () => {
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
    <section className={styles.ExperienceSection} ref={sectionRef}>
      <GrainyOverlay />
      <WaveSvg />
      <SectionHeading
        heading="Experiences"
        color={Color.greyishLight}
        containerClassName={styles.headingContainer}
      />
      <div className={styles.articlesContainer}>
        <ExperienceArticle heading="Your Majesty">
          <p>
            From February to July 2023, I completed a 6-month internship at Your
            Majesty as a creative front-end developer. During my time there, I
            worked on various projects, including{' '}
            <ExternalLink
              href={'https://impact.otrium.com/'}
              label={"Otrium's sustainability report"}
            />
            , where I utilized technologies such as Nuxtjs. Additionally, I
            contributed to a bunch of projects utilizing my skills in front-end
            frameworks and tools like Nextjs, Gsap, and StoryBlok.
          </p>
        </ExperienceArticle>
        <ExperienceArticle heading="Superhero Cheesecake Mediamonks">
          <p>
            In 2021-2022 I did a 5 months internship at Superhero Cheesecake in
            Amsterdam as a frontend developer (Nextjs, VueJs, Gsap, SCSS).
            During the internship I worked on{' '}
            <ExternalLink
              href={'https://traineeships.monks.com'}
              label={'traineeships.monks.com'}
            />
            .
          </p>
        </ExperienceArticle>
        <ExperienceArticle heading="Internship at Phenix Info">
          <p>
            In 2021 I did a 4 months internship at Phenix info in Lyon as a
            fullstack developer (FATFREE PHP, JS, CSS, HTML, MYSQL
          </p>
        </ExperienceArticle>
        <ExperienceArticle heading="Internship / fixed-term contract at My Home Tendance">
          <p>
            In 2020 I did a 4 months internship and 1 months fixed term contract
            at My Home Tendance as a fullstack developer (HTML, CSS, JS, PHP and
            MYSQL)
          </p>
        </ExperienceArticle>
      </div>
    </section>
  )
}

export default ExperienceSection
