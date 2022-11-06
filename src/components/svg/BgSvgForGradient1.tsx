import React from "react"
import ScalableSvgContainer from "./ScalableSvgContainer";

type Props = {
    className: string;
}

const BgSvgForGradient1 = (props: Props) => {
    return (
        <ScalableSvgContainer className={props.className}>
            <svg preserveAspectRatio="xMidYMin slice" width="100%" viewBox="0 0 467 427" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M117.587 346.918C171.564 416.172 258.166 429.599 306.741 425.49C366.887 412.247 404.146 361.948 414.954 342.978C436.396 305.341 476.958 227.042 464.393 179.879C441.734 94.8273 307.685 10.4292 236.482 2.96631C140.891 -7.05264 26.0444 15.2685 2.22796 121.995C-10.826 180.492 50.1156 260.35 117.587 346.918Z"
                    fill="#1D2F6F"/>
            </svg>
        </ScalableSvgContainer>
    )
}

export default BgSvgForGradient1