import { useTranslation } from "react-i18next";

export type Languages = "ua" | "ru" | "en";

export const langButtons = [
    { key: "ua", label: "Ua" },
    { key: "ru", label: "Ru" },
    { key: "en", label: "En" },
];

export const useLang = (): Languages => {
    const { i18n } = useTranslation();
    let lang: Languages;
    switch (i18n.language) {
        case "ua":
            lang = "ua";
            break;
        case "ru":
            lang = "ru";
            break;
        case "en":
            lang = "en";
            break;
        default:
            lang = "ua";
    }
    return lang;
};
