import { Languages } from "hooks/useLang";

interface IStoreUnit {
    [Languages.ua]: string;
    [Languages.ru]: string;
    [Languages.en]: string;
}
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
    createdAt: string;
}

export interface IUpdatedData {
    id: string | undefined;
    data: IUpdateStoreItem;
}

export interface IFilter {
    button: string;
    value: string;
}

export interface IStoreItemResponse {
    item: IStoreItem;
    message: string;
}

export interface IDeleteResponse {
    status: {
        acknowledged: boolean;
        deletedCount: number;
    };
    message: string;
}
