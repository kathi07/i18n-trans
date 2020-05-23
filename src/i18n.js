import React from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import transEN from './locales/translations/en/trans.json'
import transCH from './locales/translations/ch/trans.json'
import transDU from './locales/translations/du/trans.json'
import transFR from './locales/translations/fr/trans.json'
import transDE from './locales/translations/de/trans.json'
import transIT from './locales/translations/it/trans.json'
import transSP from './locales/translations/sp/trans.json'
import transJP from './locales/translations/jp/trans.json'
import transLA from './locales/translations/latin/trans.json'
import transRU from './locales/translations/ru/trans.json'

// the translations
const resources = {
    en: {
      translation: transEN
    },
    ch: {
        translation: transCH
    },
    du: {
        translation: transDU
    },
    fr: {
        translation: transFR
    },
    de: {
        translation: transDE
    },
    it: {
        translation: transIT
    },
    jp: {
        translation: transJP
    },
    ru: {
        translation: transRU
    },
    latin: {
        translation: transLA
    },
    sp: {
        translation: transSP
    }
  };
  
  


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;
