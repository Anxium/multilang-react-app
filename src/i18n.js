import i18n from 'i18next';
import backend from 'i18next-xhr-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(backend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        debug: 'true', // Only useful in dev mode
        fallbackLng: 'en'
    })

export default i18n;