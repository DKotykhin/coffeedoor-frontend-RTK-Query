import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone-lite";

import { userName, password, phone, email, yupString } from "./_validationTypes";

const registerSchema = yup.object({
    userName,
    phone,
    password,
});

const loginSchema = yup.object({
    phone,
    password,
});

const infoSchema = yup.object({
    userName,
    email,
    address: yupString,
});

const passwordSchema = yup.object({
    password,
});

const newpasswordSchema = yup.object({
    newpassword: password,
    confirmpassword: password,
});

export const RegisterFormValidation: Object = {
    defaultValues: {
        userName: "",
        phone: "+380",
        password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onChange",
};

export const LoginFormValidation: Object = {
    defaultValues: {
        phone: "+380",
        password: "",
        rememberMe: false,
    },
    resolver: yupResolver(loginSchema),
    mode: "onChange",
};

export const PasswordFormValidation: Object = {
    defaultValues: {
        password: "",
    },
    resolver: yupResolver(passwordSchema),
    mode: "onChange",
};

export const NewPasswordFormValidation: Object = {
    defaultValues: {
        newpassword: "",
        confirmpassword: "",
    },
    resolver: yupResolver(newpasswordSchema),
    mode: "onChange",
};

export const InfoFormValidation: Object = {
    resolver: yupResolver(infoSchema),
    mode: "onChange",
};
