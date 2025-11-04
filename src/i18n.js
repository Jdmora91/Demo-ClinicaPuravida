import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import en from './locales/en.json';
import { tr } from 'framer-motion/client';

i18n 
.use(initReactI18next)
.init({
    resources: {
        es: { translation: es },
        en: { translation: en },
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es', // idioma de respaldo
    interpolation: {
        escapeValue: false, // react ya maneja el escape
    },
}); 

export default i18n;