import React, { FC, ReactNode } from 'react'

type Props = {
  className: string
  children: ReactNode
}
const LocomotiveScrollSection: FC<Props> = ({ className, children }) => {
  return (
    <section className={className} data-scroll-section>
      {children}
    </section>
  )
}

export default LocomotiveScrollSection
