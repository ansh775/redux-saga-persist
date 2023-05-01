import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import localStorage from "redux-persist/es/storage";
import { combineReducers } from "redux";
import { dataReducer } from "./reducer";
import productSaga from "./sagaReducer";

const reducer = combineReducers({
  dataReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["dataReducer"],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga);
export const persistor = persistStore(store);
export default store;
