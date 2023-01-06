import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import { getAllUser } from "../../api/user";
import { userLogin } from "../../models/auth";
export const login = createAsyncThunk(
    "auth/login", async (formData: any) => {
        const { data } = await loginAuth(formData);
        return data
    });
export const getAll = createAsyncThunk(
    "user/getall", async () => {
        const { data } = await getAllUser();
        return data
    });
const initialState: any = {
    inforUser: {},
    loading: false,
    message: "",
    isLogin: false,
    users: []
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
            state.inforUser = action.payload.data;
            state.isLogin = true
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
        [getAll.fulfilled]: (state, action) => {
            state.users = action.payload.users
        }
    }
})
export const { logout } = authSlice.actions
export default authSlice.reducer