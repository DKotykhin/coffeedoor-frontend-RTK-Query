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

import infoUa from "locales/ua/infoblock.json";
import infoRu from "locales/ru/infoblock.json";
import infoEn from "locales/en/infoblock.json";

import aboutUa from "locales/ua/aboutblock.json";
import aboutRu from "locales/ru/aboutblock.json";
import aboutEn from "locales/en/aboutblock.json";

import catalogUa from "locales/ua/catalog.json";
import catalogRu from "locales/ru/catalog.json";
import catalogEn from "locales/en/catalog.json";

i18n.use(initReactI18next).init({
    resources: {
        ua: {
            menu: menuUa,
            footer: footerUa,
            thanks: thanksUa,
            first: firstUa,
            info: infoUa,
            about: aboutUa,
            catalog: catalogUa,
        },
        ru: {
            menu: menuRu,
            footer: footerRu,
            thanks: thanksRu,
            first: firstRu,
            info: infoRu,
            about: aboutRu,
            catalog: catalogRu,
        },
        en: {
            menu: menuEn,
            footer: footerEn,
            thanks: thanksEn,
            first: firstEn,
            info: infoEn,
            about: aboutEn,
            catalog: catalogEn,
        },
    },
    lng: "ua",
    fallbackLng: "ua",
    interpolation: { escapeValue: false },
});
