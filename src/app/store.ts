import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
});
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
            }
        })
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store