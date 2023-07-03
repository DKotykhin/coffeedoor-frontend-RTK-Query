import * as yup from "yup";
import "yup-phone-lite";

export const yupNumber = yup
    .number()
    .typeError("Повинно бути число!")
    .required("Обов'язкове поле!")
    .positive("Введіть позитивне число!")
    .integer("Введіть ціле число!");
export const yupString = yup
    .string()
    .optional()
    .max(100, "Введіть менше 100 символів");
export const yupStringRequired = yup
    .string()
    .required("Обов'язкове поле!")
    .min(2, "Введіть не менше ніж 2 символи!")
    .max(100, "Введіть менше 100 символів");
export const yupStringArea = yup
    .string()
    .optional()
    .max(500, "Введіть менше 500 символів");

export const userName = yup
    .string()
    .matches(/^([^0-9]*)$/, "Введіть букви!")
    .min(2, "Введіть не менше ніж 2 символи!")
    .max(20, "Введіть менше 20 символів")
    .required("Обов'язкове поле!");
export const phone = yup
    .string()
    .min(10, "Введіть правильний номер")
    .phone(["PL", "UA"], "Введіть правильний номер")
    .required("Обов'язкове поле!");
export const email = yup.string().email("Невірний email адрес");
export const password = yup
    .string()
    .required("Обов'язкове поле!")
    .min(8, "Введіть не менше ніж 8 символів!");
export const deliveryWay = yup.string().required("Виберіть спосіб доставки");
