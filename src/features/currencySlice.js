import { createSlice } from "@reduxjs/toolkit";
const selectedCurrency = JSON.parse(localStorage.getItem("selectedCurrency"));

const initialState = {
  baseCurrencySym: selectedCurrency ? selectedCurrency.baseCurrencySym : "USD",

  baseCurrencyVal: selectedCurrency ? selectedCurrency.baseCurrencyVal : 1,
};
export const currencySlice = createSlice({
  name: "baseCurrency",
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      localStorage.setItem(
        "selectedCurrency",
        JSON.stringify({
          baseCurrencySym: action.payload.sym,
          baseCurrencyVal: action.payload.val,
        })
      );
      state.baseCurrencySym = action.payload.sym;
      state.baseCurrencyVal = action.payload.val;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export default currencySlice;
