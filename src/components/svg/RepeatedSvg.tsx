import React, {useLayoutEffect, useRef} from "react";
import styles from './RepeatedSvg.module.scss'
import gsap from "gsap";

const RepeatedSvg = () => {

    const svg = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.fromTo(svg.current,
                {translateY: '100%', opacity: 0},
                {translateX: '0%',
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.6,
                    ease: "power1.out"}, 0)
            t1.fromTo(svg.current,
                {translateX: '-30%'},
                {translateY: '0%',
                    duration: 0.6,
                    delay: 0.7,
                    ease: "power3.out"}, 0)
        })
        return () => ctx.revert()
    }, [])

    return (
        <img ref={svg} className={styles.repeatedShape} src="src/public/shape repeated 1.svg" alt=""/>
    )
}

export default RepeatedSvg