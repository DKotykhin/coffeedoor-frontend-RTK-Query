import { FieldValues } from "react-hook-form";

export const menuGroupFormData = (data: FieldValues): any => {
    const { position, hidden } = data;
    const updatedData = {
        title: {
            ua: data.titleUa,
            ru: data.titleRu,
            en: data.titleEn,
        },
        subtitle: {
            ua: data.subtitleUa,
            ru: data.subtitleRu,
            en: data.subtitleEn,
        },
        position,
        hidden,
    };
    return updatedData;
};
