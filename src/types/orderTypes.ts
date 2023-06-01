import { IBasket } from "./basketTypes";

export interface IUserOrder {
    _id: string,
    userId: string,
    orderSum: number,
    orderQuantity: number,
    averageSum: number,
    basketData: IBasket[],
    createdAt: string,
}

export interface IUserOrderResponse {
    orders: IUserOrder[],
    message?: string,
}