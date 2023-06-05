import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { yupNumber, yupString, yupStringRequired } from "./_validationTypes";

const schema = yup.object({
    titleUa: yupStringRequired,
    titleRu: yupStringRequired,
    titleEn: yupStringRequired,
    subtitleUa: yupString,
    subtitleRu: yupString,
    subtitleEn: yupString,
    position: yupNumber,
});

export const MenuGroupValidation: Object = {
    resolver: yupResolver(schema),
    mode: "onBlur",
};
