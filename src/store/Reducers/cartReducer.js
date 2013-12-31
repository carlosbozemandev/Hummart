import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cart: {},
    item: [],
    total: 0,
  },
  reducers: {
    addCart(state, action) {
      const data = action.payload.data;
      // const findItem = state.item.find(
      //   (item) => item.id === action.payload.data.id
      // );
      // console.log(findItem);
      // if (findItem === undefined) {
      //   state.item.push(action.payload.data);
      //   action.payload.openNotification(
      //     "Item Added in to Cart Successfully",
      //     "success"
      //   );
      //   state.total += action.payload.data.price;
      // } else {
      //   action.payload.openNotification("This Item Already Exist", "warning");
      // }
      if (state.cart[data.id]) {
        state.cart[data.id].counting++;
        console.log("first Add", state.cart[data.id].counting);
        action.payload.openNotification(
          "Your Product Quantity Increase",
          "warning"
        );
        state.total += action.payload.data.price;
      } else {
        state.cart[data.id] = {
          counting: 1,
          data: data,
        };
        action.payload.openNotification(
          "Item Added in to Cart Successfully",
          "success"
        );
        state.total += action.payload.data.price;
        console.log("Not Add");
      }
    },
    removeItem(state, action) {
      // console.log(action);
      // console.log(state.item);
      // const newItem = state.item.filter(
      //   (item) => item.id !== action.payload.item.id
      // );
      // state.total = state.total - action.payload.item.price;
      // action.payload.openNotification();
      // console.log(newItem);
      // state.item = newItem;

      // const newItem = state.cart.filter(
      //   (item) => item?.data?.id !== action.payload.item?.data?.id
      // );
      // state.total = state.total - action.payload.item?.data?.price;
      // action.payload.openNotification();
      // console.log(newItem);
      // state.item = newItem;

      // state.cart[action.payload?.item] =

      delete state.cart[action.payload.item.data.id];
      state.total =
        state.total -
        action.payload?.item?.data?.price * action.payload?.item?.counting;
      action.payload.openNotification(
        "Item Remove From Cart Sucessfully",
        "success"
      );
    },
    increaseQuantity(state, action) {
      state.cart[action.payload?.data?.id].counting++;
      state.total += action.payload.data.price;
    },
    decreaseQuantity(state, action) {
      state.cart[action.payload?.data?.id].counting--;
      state.total = state.total - action.payload.data.price;
    },
    submitRequest(state, action) {
      state.loading = true;
    },
  },
});
// each case under reducers becomes an action
export const {
  addCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  submitRequest,
} = cartSlice.actions;
export default cartSlice.reducer;
