import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getContracts,
  createContracts,
  removeContract,
  getContractsDate,
  getCccdlender,
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
    const { data } = await getContracts("638c54551ab35050b4083dc3");
    return data;
  }
);
export const getContractDate = createAsyncThunk(
  "contract/getContractDate",
  async (prams: any) => {
    const { data } = await getContractsDate(prams.formdate, prams.todate);
    return data;
  }
);

export const getCmndLenderList = createAsyncThunk(
  "contract/getCmndLenderList",
  async (prams: number) => {
    const { data } = await getCccdlender(prams);
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
    value: [],
  },
  reducers: {
    searchNameContract: (state, action) => {
      const name = action.payload;
      console.log(state, action);
      const newArr = state.value.filter((item: any) =>
        item?.ten_khach_hang.toLowerCase().includes(name.toLowerCase())
      );
      state.value = newArr;
      console.log({ newArr });
    },
    searchStatusContract: (state, action) => {
      const trangThai = action.payload;
      console.log(trangThai);
      const newArrStatus = state.value.filter(
        (item: any) => +item.status === +trangThai
      );
      state.value = newArrStatus;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContract.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
    builder.addCase(addContract.fulfilled, (state: any, action: any) => {
      state.value.unshift(action.payload);
    });
    builder.addCase(deleteContract.fulfilled, (state: any, action: any) => {
      state.value = state.value.filter(
        (item: any) => item.id != action.payload
      );
    });
    builder.addCase(getContractDate.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
    builder.addCase(getCmndLenderList.fulfilled, (state: any, action: any) => {
      state.value = action.payload;
    });
  },
});
export const { searchNameContract } = contractSlive.actions;
export const { searchStatusContract } = contractSlive.actions;
export default contractSlive.reducer;
