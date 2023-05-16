export interface IMenuGroup {
    title: IMenuUnit;
    subtitle?: IMenuUnit;
    items: IMenuItem[];
    hidden: boolean;
    position: number;
}

interface IMenuUnit {
    ua: string;
    ru: string;
    en: string;
}

export interface IMenuItem {
    name: IMenuUnit;
    description?: IMenuUnit;
    price: string;
    hidden: boolean;
}

export type Languages = "ua" | "ru" | "en";
