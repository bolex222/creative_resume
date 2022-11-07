import React, {useLayoutEffect, useRef} from 'react'
import { gsap, } from 'gsap'
import styles from './LoopSvg.module.scss'

const LoopSvg = () => {

    const svg = useRef(null)

    /**
     * Create and run apparition gsap animation
      */
    useLayoutEffect(() => {
        const ctx: gsap.Context = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.fromTo(svg.current,
                {
                    translateX: '100%',
                    translateY: '-50%'
                },
                {
                    translateX: '0%',
                    translateY: '0%',
                    duration: 0.6,
                    delay: 0.8,
                    ease: 'power1.out'
                })
        })
        return () => ctx.revert()
    }, [])

    return (
        <img ref={svg} className={styles.loopShape} src="src/public/loop.svg" alt=""/>
    )
}

export default LoopSvg