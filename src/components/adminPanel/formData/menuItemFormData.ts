import { FieldValues } from "react-hook-form";

export const menuItemFormData = (data: FieldValues): any => {
    const { price, hidden } = data;
    const updatedData = {
        name: {
            ua: data.titleUa,
            ru: data.titleRu,
            en: data.titleEn,
        },
        description: {
            ua: data.descriptionUa,
            ru: data.descriptionRu,
            en: data.descriptionEn,
        },
        price,
        hidden,
    };
    return updatedData;
};
