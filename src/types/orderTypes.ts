import { IBasket } from "./basketTypes";

export interface IUserOrder {
    _id: string;
    userId: string;
    orderSum: number;
    orderQuantity: number;
    averageSum: number;
    basketData: IBasket[];
    createdAt: string;
}

interface IOrdersStatistic {
    totalCount: number;
    totalSum: number;
    averageSum: number;
}

export interface IUserOrderResponse {
    orders: IUserOrder[];
    statistic: IOrdersStatistic;
    message?: string;
}
