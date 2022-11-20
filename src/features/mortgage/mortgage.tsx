import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createMortgage } from "../../api/mortgage";
import { MortgageType } from "../../types/mortgage";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const addMortgage = createAsyncThunk(
  "mortgage/addMortgage",
  async (prams: MortgageType) => {
    const { data } = await createMortgage(prams);
    return data;
  }
);

const mortgageSlive = createSlice({
  name: "mortgage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMortgage.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
  },
});

export default mortgageSlive.reducer;
