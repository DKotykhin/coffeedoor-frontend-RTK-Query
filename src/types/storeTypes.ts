export interface IStoreItem {
    _id: string;
    group: string;
    title: IStoreUnit;
    itemName: IStoreUnit;
    description: IStoreUnit;
    detailText?: IStoreUnit;
    images?: [string];
    tm?: string;
    country?: IStoreUnit;
    sort?: {
        key: IStoreUnit,
        value: IStoreUnit,
    };
    price: number;
    weight?: number;
    order: boolean;
    hidden: boolean;
    position: number;
}

interface IStoreUnit {
    ua: string;
    ru: string;
    en: string;
}
