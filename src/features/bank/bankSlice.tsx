import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBank, deletelBank, getAllBank, updatelBank } from "../../api/bank";
import {
  getContracts,
  createContracts,
  removeContract,
} from "../../api/contract";
import { BankType } from "../../types/bank";


interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const getBank = createAsyncThunk(
  "bank/getBank",
  async () => {
    const { data } = await getAllBank();
    return data;
  }
);

export const addBank = createAsyncThunk(
  "bank/addBank",
  async (prams: BankType) => {
    const { data } = await createBank(prams);
    return data;
  }
);

export const deleteBank = createAsyncThunk(
  "bank/deleteBank",
  async (prams: BankType) => {
    const data = await deletelBank(prams);
    return prams;
  }
);

export const updateBank = createAsyncThunk(
    "bank/updatelBank",
    async (prams: BankType) => {
      const data = await updatelBank(prams);
      return prams;
    }
  );

const contractSlive = createSlice({
  name: "contract",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBank.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(addBank.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
    builder.addCase(deleteBank.fulfilled, (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    });
    builder.addCase(updateBank.fulfilled, (state, action) => {
        state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
    });
  },
});

export default contractSlive.reducer;
