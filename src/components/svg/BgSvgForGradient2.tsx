import React from 'react'
import ScalableSvgContainer from './ScalableSvgContainer'

type Props = {
  className: string
}

const BgSvgForGradient2 = (props: Props) => {
  return (
    <ScalableSvgContainer className={props.className}>
      <svg
        preserveAspectRatio="xMidYMin slice"
        width="100%"
        viewBox="0 0 308 273"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.749 208.226L31.0718 208.986C53.2087 244.054 84.4269 265.554 102.178 269.586C137.396 277.583 212.932 270.824 249.758 256.666C316.169 231.134 311.09 172.457 304.094 127.776C294.703 67.7916 276.744 6.88431 183.729 6.88431C132.747 6.88431 80.7122 -20.1856 21.3449 33.0314C-25.7459 75.2438 17.9079 178 30.749 208.226Z"
          fill="#310D3D"
        />
      </svg>
    </ScalableSvgContainer>
  )
}

export default BgSvgForGradient2
