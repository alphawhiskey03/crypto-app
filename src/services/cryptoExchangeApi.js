import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangeHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_COINGECKO_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
};
const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders });
export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});
export const { useGetCryptoExchange } = cryptoExchangeApi;
