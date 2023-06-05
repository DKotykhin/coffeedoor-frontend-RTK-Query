import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone-lite";

import { userName, password, phone } from "./_validationTypes";

const registerschema = yup.object({
    userName,
    phone,
    password,
});

const loginschema = yup.object({
    phone,
    password,
});

const passwordschema = yup.object({
    currentpassword: password,
});

const newpasswordschema = yup.object({
    newpassword: password,
    confirmpassword: password,
});

const profileschema = yup.object({
    userName,
});

export const RegisterFormValidation: Object = {
    defaultValues: {
        userName: "",
        phone: "+380",
        password: "",
    },
    resolver: yupResolver(registerschema),
    mode: "onChange",
};

export const LoginFormValidation: Object = {
    defaultValues: {
        phone: "+380",
        password: "",
        rememberMe: false,
    },
    resolver: yupResolver(loginschema),
    mode: "onChange",
};

export const PasswordFormValidation: Object = {
    defaultValues: {
        currentpassword: "",
    },
    resolver: yupResolver(passwordschema),
    mode: "onChange",
};

export const NewPasswordFormValidation: Object = {
    defaultValues: {
        newpassword: "",
        confirmpassword: "",
    },
    resolver: yupResolver(newpasswordschema),
    mode: "onChange",
};

export const ProfileFormValidation: Object = {
    defaultValues: {
        userName: "",
        email: "",
    },
    resolver: yupResolver(profileschema),
    mode: "onChange",
};
