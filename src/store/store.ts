import { configureStore } from "@reduxjs/toolkit";

import { fetchMenu } from "services/menuService";
import { fetchStore } from "services/storeService";

// import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [fetchMenu.reducerPath]: fetchMenu.reducer,
        [fetchStore.reducerPath]: fetchStore.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            fetchMenu.middleware,
            fetchStore.middleware
        ),
});

// setupListeners(store.dispatch);

export default store;
