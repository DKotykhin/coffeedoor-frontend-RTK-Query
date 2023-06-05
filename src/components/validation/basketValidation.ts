import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone-lite";

import { userName, deliveryWay, phone } from "./_validationTypes";

const schema = yup.object({
    userName,
    phone,
    deliveryWay,
});

export const FormValidation: Object = {
    resolver: yupResolver(schema),
    mode: "onBlur",
};
