import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContractDetail } from "../../api/contract";
import { ContractDetailType } from "../../types/contractDetailType";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const contractDetail = createAsyncThunk(
  "contractDetail/getContractDetail",
  async (prams: any) => {
    const { data } = await (prams);
    return data;
  }
);

const contractDetailSlive = createSlice({
  name: "contractDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(contractDetail.fulfilled, (state: any, action) => {
      state.value = action.payload;
    });
  },
});

export default contractDetailSlive.reducer;
