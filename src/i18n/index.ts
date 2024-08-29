import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '@/locales/en.json'
import es from '@/locales/es.json'

const resources = {
    "es": { translation: en },
    "en": { translation: es },

};

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
})

export default i18n;