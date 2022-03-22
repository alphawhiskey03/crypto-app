import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { exchangeRateApi } from "../services/exchangeRateApi";
import { newsApi } from "../services/newsApi";
import { cryptoExchangeApi } from "../services/cryptoExchangeApi";
import baseCurrency from "../features/currencySlice";
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [exchangeRateApi.reducerPath]: exchangeRateApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [cryptoExchangeApi.reducerPath]: cryptoExchangeApi.reducer,
    baseCurrency: baseCurrency.reducer,
  },
});
