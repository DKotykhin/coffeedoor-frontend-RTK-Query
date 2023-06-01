import { configureStore } from "@reduxjs/toolkit";

import { fetchMenu } from "services/menuService";
import { fetchStore } from "services/storeService";
import { fetchUser } from "services/userService";
import { fetchOrder } from "services/orderService";

import basket from "./basketSlice";

// import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        basket,
        [fetchMenu.reducerPath]: fetchMenu.reducer,
        [fetchStore.reducerPath]: fetchStore.reducer,
        [fetchUser.reducerPath]: fetchUser.reducer,
        [fetchOrder.reducerPath]: fetchOrder.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            fetchMenu.middleware,
            fetchStore.middleware,
            fetchUser.middleware,
            fetchOrder.middleware
        ),
});

// setupListeners(store.dispatch);

export default store;
