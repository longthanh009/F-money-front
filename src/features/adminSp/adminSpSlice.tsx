import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSp, updateSp } from "../../api/supportCs";
interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};
export const listSp = createAsyncThunk("support/getSupport", async () => {
  const { data } = await getSp();
  return data;
});
export const updateSupport = createAsyncThunk("support/updateSupport", async (id : any) => {
  const { data } = await updateSp(id);
  return data;
})
const adminSp = createSlice({
  name: "support",
  initialState: {
    value: [],
    check: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listSp.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
    builder.addCase(updateSupport.fulfilled, (state: any, action: any) => {
      state.value = state.value.map((item :any) => item._id === action.payload._id ? action.payload : item)
    });
  },
});

export default adminSp.reducer;
