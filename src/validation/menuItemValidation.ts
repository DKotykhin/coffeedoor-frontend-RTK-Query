import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { yupNumber, yupString, yupStringRequired } from "./_validationTypes";

const schema = yup.object({
    titleUa: yupStringRequired,
    titleRu: yupStringRequired,
    titleEn: yupStringRequired,
    descriptionUa: yupString,
    descriptionRu: yupString,
    descriptionEn: yupString,
    price: yupNumber,
});

export const MenuItemValidation: Object = {
    resolver: yupResolver(schema),
    mode: "onBlur",
};
