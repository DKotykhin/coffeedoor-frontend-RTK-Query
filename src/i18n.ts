import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import menuUa from "locales/ua/menu.json";
import menuRu from "locales/ru/menu.json";
import menuEn from "locales/en/menu.json";

import footerUa from "locales/ua/footer.json";
import footerRu from "locales/ru/footer.json";
import footerEn from "locales/en/footer.json";

import thanksUa from "locales/ua/thanks.json";
import thanksRu from "locales/ru/thanks.json";
import thanksEn from "locales/en/thanks.json";

i18n.use(initReactI18next).init({
    resources: {
        ua: {
            menu: menuUa,
            footer: footerUa,
            thanks: thanksUa,
        },
        ru: {
            menu: menuRu,
            footer: footerRu,
            thanks: thanksRu,
        },
        en: {
            menu: menuEn,
            footer: footerEn,
            thanks: thanksEn,
        },
    },
    lng: "ua",
    fallbackLng: "ua",
    interpolation: { escapeValue: false },
});
