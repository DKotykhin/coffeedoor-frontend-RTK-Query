interface IMenuUnit {
    ua: string;
    ru: string;
    en: string;
}

export interface ICreateMenuGroup {
    title: IMenuUnit;
    subtitle?: IMenuUnit;
    items: IMenuItem[];
    hidden: boolean;
    position: number;
}

export interface IMenuGroup extends ICreateMenuGroup {
    createdAt: string;
    _id: string;
}

export interface ICreateMenuItem {
    groupId: string;
    data: {
        name: IMenuUnit;
        description?: IMenuUnit;
        price: string;
        hidden: boolean;
    };
}

export interface IMenuItem {
    _id: string;
    name: IMenuUnit;
    description?: IMenuUnit;
    price: string;
    hidden: boolean;
}

export interface IUpdateMenuGroup {
    groupId?: string;
    data: IMenuGroup;
}

export interface IUpdateMenuItem {
    groupId?: string;
    data: IMenuItem;
}

export interface IMenuGroupResponse {
    item: IMenuGroup;
    message: string;
}

export interface IMenuItemResponse {
    item: IMenuItem;
    message: string;
}

export interface IMenuDeleteResponse {
    status: {
        acknowledged: boolean;
        deletedCount: number;
    };
    message: string;
}
