import { IUserInfo } from "types/userTypes";

export interface IUserForm {
    userName: string;
    email: string;
    address: string;
}

export const formProfileData = (data: IUserForm): IUserInfo => {
    const { userName, email, address } = data;
    const newData = {
        userName,
        ...(email && { email }),
        ...(address && { address }),
    };
    return newData;
};
