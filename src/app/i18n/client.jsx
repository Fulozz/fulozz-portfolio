"use client";

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName } from './settings'

const runsOnSreverSide = typeof window === 'undefined'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init({ ...getOptions(), 
        lng: undefined, 
        detection: {
            order:['path', 'htmlTag','cookie','navigattor']
    },
        preload: runsOnSreverSide ? languages : []
    })

export function useTranslation(lng, ns, options) {
    const [cookies, setCookies] = useCookies([cookieName])
    const ret = useTranslationOrg(ns, options)
    const { i18n } = ret

    if(runsOnSreverSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng)
    }
    else {
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
        useEffect(() => {
            setActiveLng(i18n.resolvedLanguage)
        }, [activeLng, i18n.resolvedLanguage])
        useEffect(() => {
            if(!lng || i18n.resolvedLanguage === lng) return 
            i18n.changeLanguage(lng)
        }, [lng, i18n])
        useEffect(()=> {
            if(cookies.i18n === lng) return
            setCookies(cookieName, lng, { path: '/' })
        }, [lng, cookies.i18next])
    }
    return ret
}