import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import { userLogin } from "../../models/auth";
export const login = createAsyncThunk(
    "auth/login", async (formData: userLogin) => {
        const { data } = await loginAuth(formData);
        return data
    });
const authSlice = createSlice({
    name: "auth",
    initialState: {
        inforUser: {},
        loading: false,
        message: ""
    },
    reducers: {
        logout: (state, action) => {
            state.inforUser = {};
            console.log(state.inforUser);
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.inforUser = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})
export const { logout } = authSlice.actions
export default authSlice.reducer