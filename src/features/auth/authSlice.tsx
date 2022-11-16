import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import { userLogin } from "../../models/auth";
export const login = createAsyncThunk(
    "auth/login", async (formData: userLogin) => {
        const { data } = await loginAuth(formData);
        return data
    });
    const initialState:any = {
        inforUser: {},
        loading: false,
        message: "",
        isLogin:false
    }
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.inforUser = {};
            state.isLogin = false
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.inforUser = action.payload;
            state.isLogin = true
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})
export const { logout } = authSlice.actions
export default authSlice.reducer