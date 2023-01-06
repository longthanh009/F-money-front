import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import {
  getContracts,
  createContracts,
  removeContract,
  getContractsDate,
  getCccdlender,
  deletelManyContract,
  checkPayMoney,
} from "../../api/contract";

import { ContractType } from "../../types/contractTypes";

interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

const idUserContracrt = () => {
  const token = localStorage.getItem("token");
  const convertStringToken = JSON.stringify(token);
  const decodedToken = jwt_decode<any>(convertStringToken);
  const id = decodedToken.id;
  return id;
};

export const getContract = createAsyncThunk(
  "contract/getContract",
  async () => {
    const { data } = await getContracts();
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
export const deleteMany = createAsyncThunk(
  "contract/deleteManyContract",
  async (params: any) => {
    console.log(params);
    const { data } = await deletelManyContract(params);
    console.log(data);
    return data;
  }
);
export const statusContrats = createAsyncThunk(
  "contract/statusContrats",
  async (objecData: any) => {
    let objecNew = {
      date: objecData.date,
      status: objecData.status,
    };
    const { data } = await checkPayMoney(objecData.id, objecNew);
    return data;
  }
);

const contractSlive = createSlice({
  name: "contract",
  initialState: {
    value: [],
    check: [],
  },
  reducers: {
    searchNameContract: (state, action) => {
      const name = action.payload;
      const newArr = state.value.filter((item: any) =>
        item?.ten_khach_hang.toLowerCase().includes(name.toLowerCase())
      );
      state.value = newArr;
      console.log({ newArr });
    },
    searchStatusContract: (state, action) => {
      const trangThai = action.payload;
      const newArrStatus = state.value.filter(
        (item: any) => +item.status === +trangThai
      );
      state.value = newArrStatus;
    },
    removeMultipleContract: (state, action) => {
      const data = action.payload;
      state.value = state.value.filter((x: any) =>
        state.check.every((x2: any) => x2 !== x._id)
      );
    },
    addMuiltipleValues: (state, action) => {
      const { value, checked } = action.payload;
      if (checked) {
        state.check = [...state.check, value];
      } else {
        state.check = state.check.filter((e: any) => e != value);
      }
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
    builder.addCase(statusContrats.fulfilled, (state: any, action: any) => {
      state.value = state.value.map((item: any) =>
        item._id === action.payload._id ? action.payload : item
      );
    });
  },
});
export const {
  searchNameContract,
  removeMultipleContract,
  addMuiltipleValues,
} = contractSlive.actions;
export const { searchStatusContract } = contractSlive.actions;
export default contractSlive.reducer;
