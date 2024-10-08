'use client'

import React from 'react'
import Typed from 'typed.js'
import { useTranslation, LanguageContext } from 'utils/locale'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef<Typed | null>(null)
  const { currentLang } = React.useContext(LanguageContext)
  const { t } = useTranslation('about-me')

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1500,
    })
    return () => typed.current?.destroy()
  })

  return (
    <div>
      <span>👋 </span>
      <ul id="bios" className="hidden">
        <li key="1">
          {t("I'm an")} <b className="text-primary-300">{t('typed.android')}</b>.
        </li>
        <li key="2">
          {t('typed.Iam-a')} <b className="text-primary-300">{t('typed.web')}</b>.
        </li>
        <li key="3">
          {t('typed.Iam-a')} <b className="text-primary-300">{t('typed.tech')}</b>.
        </li>
        <li key="4">
          {t('typed.Iam-a')} <b className="text-primary-300">{t('typed.blog')}</b>.
        </li>
        <li key="5">
          {t('typed.Iam-a')} <b className="text-primary-300">{t('typed.linux')}</b>.
        </li>
        <li key="6">
          {t('typed.Iam-a')} <b className="text-primary-300">{t('typed.life')}</b>.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
