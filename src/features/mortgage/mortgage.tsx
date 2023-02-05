import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deletelManyContract } from "../../api/contract";
import {
  createMortgage,
  getContractsMgDate,
  getDetailMortgage,
  getMortgage,
  putContractsMgDate,
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
    const { data } = await getMortgage();
    return data;
  }
);
export const putMortgage = createAsyncThunk(
  "mortgage/putMortgage",
  async (id : any) => {
    const { data } = await putContractsMgDate(id);
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
export const getContractMgDate = createAsyncThunk(
  "contract/getContractMgDate",
  async (prams: any) => {
    const { data } = await getContractsMgDate(prams.formdate, prams.todate);
    return data;
  }
);

export const deleteMany = createAsyncThunk(
  "contract/deleteManyContract",
  async (params: any) => {
    console.log(params);
    const { data } = await deletelManyContract(params);
    return data;
  }
);

const mortgageSlive = createSlice({
  name: "mortgage",
  initialState: {
    value: [],
    loading: false,
    message: "",
    check: [],
  },
  reducers: {
    searchNameMortgage: (state, action) => {
      const name = action.payload;
      const newArr = state.value.filter((item) =>
        item?.ten_khach_hang.toLowerCase().includes(name.toLowerCase())
      );
      state.value = newArr;
    },
    removeMultipleMortgage: (state, action) => {
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
    filterMortgage: (state, action) => {
      const data = action.payload;
      if (data == "status") {
        return;
      } else {
        state.value = state.value.filter((item: any) => item.status == data);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listMortgage.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(addMortgage.fulfilled, (state, action) => {
      state.value.unshift(action.payload);
    });
    builder.addCase(putMortgage.fulfilled, (state: any, action: any) => {
      state.value = state.value.map((item: any) =>
        item._id == action.payload._id ? action.payload : item
      );
    })
    builder.addCase(getContractMgDate.fulfilled, (state: any, action: any) => {      
      state.value = action.payload;
    });
    
  },
});
export const {
  searchNameMortgage,
  removeMultipleMortgage,
  addMuiltipleValues,
  filterMortgage,
} = mortgageSlive.actions;
export default mortgageSlive.reducer;
