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

import firstUa from "locales/ua/firstblock.json";
import firstRu from "locales/ru/firstblock.json";
import firstEn from "locales/en/firstblock.json";

i18n.use(initReactI18next).init({
    resources: {
        ua: {
            menu: menuUa,
            footer: footerUa,
            thanks: thanksUa,
            first: firstUa,
        },
        ru: {
            menu: menuRu,
            footer: footerRu,
            thanks: thanksRu,
            first: firstRu,
        },
        en: {
            menu: menuEn,
            footer: footerEn,
            thanks: thanksEn,
            first: firstEn,
        },
    },
    lng: "ua",
    fallbackLng: "ua",
    interpolation: { escapeValue: false },
});
