import React, {useLayoutEffect, useRef} from "react";
import { gsap } from 'gsap'

import styles from './LetterFromTheBottom.module.scss'

type Props = {
    className: string,
    children: JSX.Element,
    letterIndex: number
}

const LetterFromTheBottom = ({className, letterIndex, children}: Props) => {
    const letterSpan = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(letterSpan.current, {translateY: '0', rotate: '0', opacity: 1, duration: 0.5, delay: letterIndex / 40})
        })
        return () => ctx.revert()
    })


    return (
        <span key={`letter_${letterIndex}`} className={styles.letter} ref={letterSpan}>
            {children}
        </span>
    )

}

export default LetterFromTheBottom