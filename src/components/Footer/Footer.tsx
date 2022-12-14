import React, { FC } from 'react'
import AnimatedLink from '@/components/Buttons/AnimatedLink/AnimatedLink'
import GrainyOverlay from '@/components/GrainyOverlay/GrainyOverlay'
import resumeLink from '@/public/resume.pdf'

import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <GrainyOverlay />
      <div className={styles.buttonWrapper}>
        <AnimatedLink link={resumeLink} download={true}>
          Download pdf resume
        </AnimatedLink>
        <AnimatedLink link="https://github.com/bolex222/creative_resume">
          This project github repo
        </AnimatedLink>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.linksListWrapper}>
          <h5 className={styles.heading}>Links</h5>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="https://github.com/bolex222">My Github</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://www.linkedin.com/in/blecout/">My Linkedin</a>
            </li>
            <li className={styles.listItem}>
              <a href="https://www.instagram.com/basile_lecout/">My Photos</a>
            </li>
            <li className={styles.listItem}>
              <a href="mailto:lecouturier.basile@gmail.com">
                lecouturier.basile@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.projectList}>
          <h5 className={styles.heading}>This resume has been made with</h5>
          <ul>
            <li className={styles.listItem}>React, Typescript, Vitejs</li>
            <li className={styles.listItem}>
              SCSS, GSAP,{' '}
              <span
                title="no more using locomotive scroll due to build error"
                className={styles.locoscroll}
              >
                Locomotive scroll
              </span>
            </li>
            <li className={styles.listItem}>Figma, illustrator</li>
          </ul>
        </div>
        <div className={styles.projectList}>
          <h5 className={styles.heading}>Credits</h5>
          <ul>
            <li className={styles.listItem}>
              <a href="https://thenounproject.com/icon/resume-1602678/">
                favicon by joeartcon
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="https://www.behance.net/stephenfrenchjr">
                font by Stephen French
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
