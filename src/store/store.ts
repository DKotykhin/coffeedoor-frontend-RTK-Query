import { configureStore } from "@reduxjs/toolkit";

import { fetchMenu } from "services/menuService";

// import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [fetchMenu.reducerPath]: fetchMenu.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchMenu.middleware),
});

// setupListeners(store.dispatch);

export default store;
