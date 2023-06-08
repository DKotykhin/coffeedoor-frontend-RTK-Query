export interface IUserLogin {
    phone: string;
    password: string;
}

export interface IUserLoginForm extends IUserLogin {
    rememberMe: boolean;
}

export interface IUserRegister {
    userName: string;
    phone: string;
    password: string;
}

export interface IUserInfo {
    userName: string;
    email?: string;
    address?: string;
}

export interface IUser {
    _id: string;
    userName: string;
    phone: string;
    role: string;
    createdAt: string;
    address?: string;
    email?: string;
    avatarURL?: string;
}

export interface IUserResponse {
    user: IUser;
    token: string;
    message?: string;
}


export interface IUserLoginByTokenResponse {
    user: IUser;
    message: string;
}

export interface IPasswordResponse {
    status: boolean;
    message: string;
}
