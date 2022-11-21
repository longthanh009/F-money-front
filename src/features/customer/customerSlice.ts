import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register } from "../../api/auth";
import { deletelManyUser, deletelUser, getAllUser } from "../../api/user";
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
export const deleteMany = createAsyncThunk(
    "auth/deleteManyUser", async (params:any) => {
        console.log(params)
        const { data } = await deletelManyUser(params);
        console.log(data)
        return data
    });
export const removeUser = createAsyncThunk(
    "auth/removeUser", async (id : any) => {
        const { data } = await deletelUser(id);
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
        searchNameUser : (state,action) =>{
            const name = action.payload;
            const newArr = state.values.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
            state.values = newArr
        },
         removeMultipleUser: (state, action) => {
            // state.values = action.payload
            console.log(action.payload)
            // console.log(action.payload.checked)
            // const currentItem = state.values.find((item) => item._id === action.payload);
            // const data =  state.values.push({...currentItem});
            // console.log(data);
        }
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
        [removeUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.values = state.values.filter(item => item._id !== action.payload._id)
        },
    }
})
export const {searchNameUser, removeMultipleUser} = authSlice.actions
export default authSlice.reducer