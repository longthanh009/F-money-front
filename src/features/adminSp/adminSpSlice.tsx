import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSp } from "../../api/supportCs";
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
  },
});

export default adminSp.reducer;
