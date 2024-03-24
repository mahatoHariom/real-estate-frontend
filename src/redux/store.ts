import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import cartReducer from "./features/cart"
import PropertyTypeReducer from "./features/property_type"
import ModalReducer from './features/modal'

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["allCart", "propertyType"],
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = configureStore({
  reducer: {
    allCart: persistedReducer,
    propertyType: PropertyTypeReducer,
    modal:ModalReducer
  },
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>