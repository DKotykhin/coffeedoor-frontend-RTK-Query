export interface IUpdateStoreItem {
    title: IStoreUnit;
    itemName: IStoreUnit;
    description: IStoreUnit;
    detailText?: IStoreUnit;
    images?: [string];
    tm?: string;
    country?: IStoreUnit;
    sort?: {
        key: IStoreUnit;
        value: IStoreUnit;
    };
    price: number;
    weight?: number;
    order: boolean;
    hidden: boolean;
    position: number;
}

export interface ICreateStoreItem extends IUpdateStoreItem {
    group: string;
}

export interface IStoreItem extends ICreateStoreItem {
    _id: string;
}

export interface IDeleteStoreItem {
    _id?: string;
}

export interface IUpdatedData {
    id: string;
    data: IUpdateStoreItem;
}

interface IStoreUnit {
    ua: string;
    ru: string;
    en: string;
}

export interface IFilter {
    button: string;
    value: string;
}
