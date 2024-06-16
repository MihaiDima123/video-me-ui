import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from '../locales/en.json'
import roTranslation from '../locales/ro.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            ro: { translation: roTranslation }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });
