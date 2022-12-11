import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSp } from "../../api/supportCs";
import jwt_decode from "jwt-decode";
interface Icontract {
  value: any[];
}
const initialState: Icontract = {
  value: [],
};

const idUserAdmin = () => {
  const token = localStorage.getItem("token");
  const convertStringToken = JSON.stringify(token);
  const decodedToken = jwt_decode<any>(convertStringToken);
  const id = decodedToken.id;
  return id;
};

export const listSp = createAsyncThunk("contract/getContract", async () => {
  const { data } = await getSp(idUserAdmin());
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
