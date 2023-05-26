import { FieldValues } from "react-hook-form";

export const updateFormData = (
    data: FieldValues,
    itemId: string | undefined,
    mdeValueUa: string | undefined,
    mdeValueRu: string | undefined,
    mdeValueEn: string | undefined
): any => {
    const { price, position, weight, tm } = data;
    const updatedData = {
        id: itemId,
        data: {
            title: {
                ua: data.titleUa,
                ru: data.titleRu,
                en: data.titleEn,
            },
            itemName: {
                ua: data.itemNameUa,
                ru: data.itemNameRu,
                en: data.itemNameEn,
            },
            country: {
                ua: data.countryUa,
                ru: data.countryRu,
                en: data.countryEn,
            },
            sort: {
                key: {
                    ua: data.sortKeyUa,
                    ru: data.sortKeyRu,
                    en: data.sortKeyEn,
                },
                value: {
                    ua: data.sortValueUa,
                    ru: data.sortValueRu,
                    en: data.sortValueEn,
                },
            },
            description: {
                ua: data.descriptionUa,
                ru: data.descriptionRu,
                en: data.descriptionEn,
            },
            detailText: {
                ua: mdeValueUa,
                ru: mdeValueRu,
                en: mdeValueEn,
            },
            price: +price,
            weight: +weight,
            tm,
            position: +position,
            hidden: data.hidden === "true",
            order: data.order === "true",
        },
    };
    return updatedData;
};
