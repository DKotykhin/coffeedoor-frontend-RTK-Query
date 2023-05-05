export interface IStoreItem {
    group: String;
    title: IStoreUnit;
    itemName: IStoreUnit;
    description?: IStoreUnit;
    detailText?: IStoreUnit;
    images?: [String];
    tm?: String;
    country?: String;
    sort?: String;
    price: Number;
    weight?: Number;
    order: Boolean;
    hidden: Boolean;
    position: Number;
}

interface IStoreUnit {
    ua: String;
    ru: String;
    en: String;
}
