import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import "yup-phone-lite";

const userName = yup
    .string()
    .matches(/^([^0-9]*)$/, "Enter letters!")
    .min(2, "Minimum 2 characters to fill")
    .max(20, "Maximum 20 characters to fill")
    .required("Required field!");

const phone = yup
    .string()
    .min(10, "Введіть правильний номер")
    .phone(["PL", "UA"], "Введіть правильний номер")
    .required("Обов'язкове поле!");

// const email = yup.string().email("Wrong email address");

const password = yup
    .string()
    .required("Required field!")
    .min(8, "Minimum 8 characters to fill");

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
