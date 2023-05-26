import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasket } from "types/basketTypes";

type BasketState = {
    basketData: IBasket[];
};

const initialState: BasketState = {
    basketData: [],
};

const basketdataListSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        basketAddItems: (state, action: PayloadAction<IBasket>) => {
            const itemIndex = state.basketData.findIndex(
                (item) => item.id === action.payload.id
            );
            itemIndex < 0
                ? (state.basketData = [...state.basketData, action.payload])
                : (state.basketData = state.basketData.map((item, index) => {
                      if (index === itemIndex) {
                          return {
                              ...item,
                              quantity: item.quantity + action.payload.quantity,
                          };
                      } else {
                          return item;
                      }
                  }));
        },

        basketRemoveItems: (state, action: PayloadAction<string>) => {
            const newOrder = state.basketData.filter(
                (item) => item.id !== action.payload
            );
            state.basketData = newOrder;
        },

        basketRemoveQuantity: (state, action: PayloadAction<string>) => {
            state.basketData.forEach((item) => {
                if (item.id === action.payload) {
                    item.quantity > 1
                        ? (item.quantity -= 1)
                        : (item.quantity = 1);
                }
            });
        },

        basketAddQuantity: (state, action: PayloadAction<string>) => {
            state.basketData.forEach((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1;
                }
            });
        },

        basketSetEmpty: (state) => {
            state.basketData = [];
        },
    },
});

const { actions, reducer } = basketdataListSlice;

export default reducer;
export const {
    basketAddItems,
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
    basketSetEmpty,
} = actions;
