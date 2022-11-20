import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getContracts,
  createContracts,
  removeContract,
} from "../../api/contract";
import { ContractType } from "../../types/contractTypes";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

export const getContract = createAsyncThunk(
  "contract/getContract",
  async () => {
    const { data } = await getContracts("636a2127a281e92df41190ee");
    return data;
  }
);

export const addContract = createAsyncThunk(
  "contract/addContract",
  async (prams: ContractType) => {
    const { data } = await createContracts(prams);
    return data;
  }
);

export const deleteContract = createAsyncThunk(
  "contract/deleteContract",
  async (prams: ContractType) => {
    const data = await removeContract(prams);
    return prams;
  }
);

const contractSlive = createSlice({
  name: "contract",
  initialState: {
    value: []
  },
  reducers: {
    searchNameContract : (state,action) =>{
      const name = action.payload;
      const newArr = state.value.filter(item => item.ten_khach_hang.toLowerCase().includes(name.toLowerCase()));
      state.value = newArr
  }
  },
  extraReducers: (builder) => {
    builder.addCase(getContract.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(addContract.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
    builder.addCase(deleteContract.fulfilled, (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    });
  },
});
export const {searchNameContract} = contractSlive.actions
export default contractSlive.reducer;
