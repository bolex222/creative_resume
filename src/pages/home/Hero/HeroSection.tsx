import React from 'react'
import styles from './HeroSection.module.scss'
import BgSvgForGradient1 from "../../../components/svg/BgSvgForGradient1";
import BgSvgForGradient2 from "../../../components/svg/BgSvgForGradient2";
import AnimatedText from "../../../components/text/AnimatedText";
import YearSvg from "../../../components/svg/YearSvg";
import RepeatedSvg from "../../../components/svg/RepeatedSvg";
import ScalableSvgContainer from "../../../components/svg/ScalableSvgContainer";
import LoopSvg from "../../../components/svg/LoopSvg";

const HeroSection = () => {
    return (
        <section className={styles.hero_section}>
            <div className={styles.background}>
                <div className={styles.blurBackground}/>
                <BgSvgForGradient1 className={styles.blueSvg}/>
                <BgSvgForGradient2 className={styles.purpleSvg}/>
                <RepeatedSvg/>
                <LoopSvg/>
            </div>
            <h1 className={styles.title}>
                <AnimatedText text="Basile LECOUTURIER"/>
            </h1>
            <YearSvg/>
            <div className={styles.grainyOverlayContainer}/>
        </section>
    )
}

export default HeroSection