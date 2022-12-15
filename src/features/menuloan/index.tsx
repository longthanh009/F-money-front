import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMenuLoan } from "../../api/menuLoan";


interface ImenuLoan{
  values: any[];
}
const initialState: ImenuLoan = {
  values: [],
};

export  const listMenuLoan = createAsyncThunk(
"menuLoan/getMenuLoan", 
async () => {
  const { data } = await getMenuLoan();
  return data
});

const menuLoan = createSlice({
  name: "menuLoan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listMenuLoan.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.values  = action.payload;
    });
  },
});

export default menuLoan.reducer;
