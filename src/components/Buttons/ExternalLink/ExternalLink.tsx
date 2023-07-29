import React, { FC } from 'react'
import s from './externalLink.module.scss'

type Props = {
  href: string
  label: string
}

const ExternalLink: FC<Props> = ({ href, label }) => {
  return (
    <a className={s.externalLink} href={href}>
      <span className={s.linkLabel}>{label}</span>
      <div className={s.underline} />
    </a>
  )
}

export default ExternalLink
