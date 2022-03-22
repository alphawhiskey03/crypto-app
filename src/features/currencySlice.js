import { createSlice } from "@reduxjs/toolkit";
const selectedCurrency = JSON.parse(localStorage.getItem("selectedCurrency"));

const initialState = {
  baseCurrencySym: selectedCurrency.baseCurrencySym
    ? selectedCurrency.baseCurrencySym
    : "USD",

  baseCurrencyVal: selectedCurrency.baseCurrencySym
    ? selectedCurrency.baseCurrencyVal
    : 1,
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
      console.log(state.baseCurrencySym);
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export default currencySlice;
