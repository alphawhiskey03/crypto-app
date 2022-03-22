import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const exchangeRateApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_CURRENCY_CONVERTER_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
};
const baseUrl = "https://currencyconverter9.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: exchangeRateApiHeaders });
export const exchangeRateApi = createApi({
  reducerPath: "exchangeRateApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchangeRates: builder.query({
      query: () => createRequest("/fetch-all"),
    }),
  }),
});
export const { useGetExchangeRatesQuery } = exchangeRateApi;
