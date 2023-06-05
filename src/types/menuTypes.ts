export interface IMenuGroup {
    title: IMenuUnit;
    subtitle?: IMenuUnit;
    items: IMenuItem[];
    hidden: boolean;
    position: number;
    _id: string;
    createdAt: string;
}

export interface IUpdateMenuGroup {
    groupId: string;
    data: IMenuGroup;
}

export interface IDeleteResponse {
    acknowledged: boolean;
    deletedCount: number;
    mesaage: string;
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
    _id: string;
}
