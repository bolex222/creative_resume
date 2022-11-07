import React from 'react'
import styles from './HeroSection.module.scss'
import AnimatedText from "@/components/text/AnimatedText";
import YearSvg from "@/components/svg/YearSvg";
import HeroBackground from "@/pages/home/Hero/HeroBackground";

const HeroSection = () => {
    return (
        <section className={styles.hero_section}>
            <HeroBackground/>
            <h1 className={styles.title}>
                <AnimatedText text="Basile LECOUTURIER"/>
            </h1>
            <div>
                <YearSvg/>
            </div>
            <div className={styles.grainyOverlayContainer}/>
        </section>
    )
}

export default HeroSection