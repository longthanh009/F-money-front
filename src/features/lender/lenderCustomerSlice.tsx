import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createLenderCustomer } from "../../api/lenderCustomer";
import { LenderCustomerType } from "../../types/lenderCustomerType";

interface IlenderCustomer {
  value: any[];
}
const initialState: IlenderCustomer = {
  value: [],
};

export const addLenderCustomer = createAsyncThunk(
  "lenderCustomer/addLenderCustomer",
  async (prams: LenderCustomerType) => {
    const { data } = await createLenderCustomer(prams);
    return data;
  }
);

const lenderCustomerSlive = createSlice({
  name: "lenderCustomer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addLenderCustomer.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
  },
});

export default lenderCustomerSlive.reducer;
