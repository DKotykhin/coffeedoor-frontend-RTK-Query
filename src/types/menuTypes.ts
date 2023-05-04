export interface IMenuGroup {
    title: IMenuUnit;
    subtitle?: IMenuUnit;
    items: IMenuItem[];
    hidden: Boolean;
    position: Number;
}

interface IMenuUnit {
    ua: String;
    ru: String;
    en: String;
}

export interface IMenuItem {
    name: IMenuUnit;
    description?: IMenuUnit;
    price: String;
    hidden: Boolean;
}

export type Languages = "ua" | "ru" | "en";
