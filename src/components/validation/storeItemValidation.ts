import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import {
    yupNumber,
    yupString,
    yupStringRequired,
    yupStringArea,
} from "./_validationTypes";

const schema = yup.object({
    titleUa: yupStringRequired,
    titleRu: yupStringRequired,
    titleEn: yupStringRequired,
    itemNameUa: yupStringRequired,
    itemNameRu: yupStringRequired,
    itemNameEn: yupStringRequired,
    countryUa: yupString,
    countryRu: yupString,
    countryEn: yupString,
    sortKeyUa: yupString,
    sortKeyRu: yupString,
    sortKeyEn: yupString,
    sortValueUa: yupString,
    sortValueRu: yupString,
    sortValueEn: yupString,
    descriptionUa: yupStringArea,
    descriptionRu: yupStringArea,
    descriptionEn: yupStringArea,
    price: yupNumber,
    weight: yupNumber,
    tm: yupString,
    position: yupNumber,
});

export const StoreItemValidation: Object = {
    resolver: yupResolver(schema),
    mode: "onBlur",
};
