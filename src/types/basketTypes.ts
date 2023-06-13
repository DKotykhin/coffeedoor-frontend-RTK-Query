export interface IBasket {
    title: string;
    itemName: string;
    image: string;
    price: number;
    quantity: number;
    weight?: number;
    id: string;
}

export interface IFormData {
    userName: string;
    phone: string;
    deliveryWay: string;
    comment: string;
}

export interface IFullData {
    userData: IFormData;
    basketData: IBasket[]
}