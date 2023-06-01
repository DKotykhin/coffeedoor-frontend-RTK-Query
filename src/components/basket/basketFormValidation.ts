import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import "yup-phone-lite";

const schema = yup.object({
    userName: yup
        .string()
        .required("Обов'язкове поле!")
        .matches(/^([^0-9]*)$/, 'Введіть букви!')
        .min(2, 'Мінімум 2 символа для заповнення'),
    phone: yup
        .string()
        .phone('UA', 'Введіть правильний номер')
        .required("Обов'язкове поле!"),
    deliveryWay: yup
        .string()
        .required("Виберіть спосіб доставки")
});

export const FormValidation: Object = {
    resolver: yupResolver(schema),
    mode: 'onBlur'
}