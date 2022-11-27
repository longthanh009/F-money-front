import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createMortgage, getMortgage } from "../../api/mortgage";
import { IMortgageType } from "../../types/mortgage";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const addMortgage = createAsyncThunk(
  "mortgage/addMortgage",
  async (prams: IMortgageType) => {
    const { data } = await createMortgage(prams);
    return data;
  }
);

export const listMortgage = createAsyncThunk(
  "mortgage/listMortgage",
  async () => {
    const { data } = await getMortgage("637e3292baffb14ee19d1b25");
    return data;
  }
);
const mortgageSlive = createSlice({
  name: "mortgage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listMortgage.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(addMortgage.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
  },
});

export default mortgageSlive.reducer;
