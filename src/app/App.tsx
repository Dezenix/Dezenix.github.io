import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import '../styles/app.css'
import './i18n/app.i18n'

export default function App() {
  const { t } = useTranslation('translation')
  return (
    <div>
      <Box>{t('test')}</Box>
    </div>
  )
}

const Box = styled.div`
  background: #000000;
  border-radius: 16px;
  width: 100px;
  height: 100px;
  padding: 50px;
  text-align: center;
`
