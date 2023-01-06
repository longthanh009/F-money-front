import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSp } from "../../api/supportCs";
interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};
export const listSp = createAsyncThunk("contract/getContract", async () => {
  const { data } = await getSp();
  return data;
});

const adminSp = createSlice({
  name: "contract",
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
