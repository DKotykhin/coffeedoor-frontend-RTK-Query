import { useTranslation } from "react-i18next";

// export type Languages = "ua" | "ru" | "en";

export enum Languages {
    "ua" = "ua",
    "ru" = "ru",
    "en" = "en",
} 

export const langButtons = [
    { key: Languages.ua, label: "Ua" },
    { key: Languages.ru, label: "Ru" },
    { key: Languages.en, label: "En" },
];

export const useLang = (): Languages => {
    const { i18n } = useTranslation();
    let lang: Languages;
    switch (i18n.language) {
        case "ua":
            lang = Languages.ua;
            break;
        case "ru":
            lang = Languages.ru;
            break;
        case "en":
            lang = Languages.en;
            break;
        default:
            lang = Languages.ua;
    }
    return lang;
};
