import { createSlice } from "@reduxjs/toolkit";
import { api } from "../Constants/apiUrl";
import axios from "axios";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
  },
  reducers: {
    getProducts(state, action) {
      state.loading = true;
      state.products = action.payload.products;
    },
  },
});

const getAllProducts = () => {
  return async (dispatch) => {
    await axios
      .get(`${api}products/category/smartphones`)
      .then((response) => {
        dispatch(getProducts(response.data));
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
};
// each case under reducers becomes an action
export const { getProducts } = productSlice.actions;
export { getAllProducts };
export default productSlice.reducer;
