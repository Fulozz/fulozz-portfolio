import React from 'react'
import { useTranslation } from '@/app/i18n'
const Home = async ({ lng }) => {
    const { t } = await useTranslation(lng)
  return (
    <div>Home</div>
  )
}

export default Home