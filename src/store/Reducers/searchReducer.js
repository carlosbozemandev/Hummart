import { createSlice } from "@reduxjs/toolkit";
import { api } from "../Constants/apiUrl";
import axios from "axios";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    searchResult: [],
  },
  reducers: {
    getProducts(state, action) {
      state.loading = true;
      // console.log("abcb", action.payload);
      let testArr = [];
      action.payload.products.map((item) => {
        return testArr.push({
          ...item,
          value: item["title"],
          label: item["title"],
        });
      });
      state.searchResult = testArr;
      console.log(testArr, "teeetetete");
    },
    resetProduct(state, action) {
      // console.log("first");
      state.searchResult = [];
    },
  },
});

const searchProduct = (val) => {
  return async (dispatch) => {
    await axios
      .get(`${api}products/search?q=${val}`)
      .then((response) => {
        // console.log(response.data);
        dispatch(getProducts(response.data));
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
};
// each case under reducers becomes an action
export const { getProducts, resetProduct } = searchSlice.actions;
export { searchProduct };
export default searchSlice.reducer;
