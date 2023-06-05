import { FieldValues } from "react-hook-form";

export const storeFormData = (
    data: FieldValues,
    mdeValueUa: string | undefined,
    mdeValueRu: string | undefined,
    mdeValueEn: string | undefined
): any => {
    const { price, position, weight, tm, hidden, order } = data;
    const updatedData = {
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
        price: price,
        weight: weight,
        tm,
        position,
        hidden,
        order,
    };
    return updatedData;
};
