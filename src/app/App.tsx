import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/app.css'
import './i18n/app.i18n'

export default function App() {
  const { t } = useTranslation('translation')
  return <div>{t('test')}</div>
}
