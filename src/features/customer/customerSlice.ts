import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import { getAllUser } from "../../api/user";
import { userLogin } from "../../models/auth";
export const newUser = createAsyncThunk(
    "auth/newUser", async (formData: userLogin) => {
        const { data } = await register(formData);
        return data
    });
export const getAll = createAsyncThunk(
    "auth/getAllUser", async () => {
        const { data } = await getAllUser();
        return data
    });
const authSlice = createSlice({
    name: "auth",
    initialState: {
        values: [],
        loading: false,
        message: ""
    },
    reducers: {
    },
    extraReducers: {
        [newUser.pending]: (state, action) => {
            state.loading = true;
        },
        [newUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.values.push(action.payload)
        },
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.values = action.payload.users;            
        },
        [newUser.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})
export default authSlice.reducer