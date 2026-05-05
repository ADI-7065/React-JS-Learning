import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  LOADING: "Loading",
  SUCCESS: "Success",
  ERROR: "Error",
  EMPTY: "Empty",
});

const initialState = {
  data: [],
  originalData: [],
  status: STATUS.LOADING,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setOriginalProducts: (state, action) => {
      state.originalData = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setOriginalProducts, setStatus } =
  productSlice.actions;

export default productSlice.reducer;

// ── Thunk ────────────────────────────────────────────────────────────────────
export function fetchProducts() {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data = await res.json();
      if (!data.length) {
        dispatch(setStatus(STATUS.EMPTY));
        return;
      }
      dispatch(setProducts(data));
      dispatch(setOriginalProducts(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.error("fetchProducts failed:", error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
