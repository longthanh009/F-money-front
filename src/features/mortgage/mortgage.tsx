import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createMortgage,
  getDetailMortgage,
  getMortgage,
} from "../../api/mortgage";
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
    const { data } = await getMortgage("638c54551ab35050b4083dc3");
    return data;
  }
);


export const listDetailMortgage = createAsyncThunk(
  "mortgage/listDetailMortgage",
  async (prams: IMortgageType) => {
    const { data } = await getDetailMortgage(prams);
    return data;
  }
);

const mortgageSlive = createSlice({
  name: "mortgage",
  initialState,
  reducers: {
    searchNameMortgage: (state, action) => {
      const name = action.payload;
      const newArr = state.value.filter((item) =>
        item?.ten_khach_hang.toLowerCase().includes(name.toLowerCase())
      );
      state.value = newArr;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listMortgage.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(addMortgage.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
  },
});
export const { searchNameMortgage } = mortgageSlive.actions;
export default mortgageSlive.reducer;
