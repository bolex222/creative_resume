import React from "react";
import styles from './ScalableSvgContainer.module.scss'

type Props = {
    className?: string
    children: JSX.Element
}
const ScalableSvgContainer = ({className, children}: Props) => {
    return(
        <div className={`${className? className : ''} ${styles.wrapper}`}>
            {children}
        </div>
    )
}

export default ScalableSvgContainer