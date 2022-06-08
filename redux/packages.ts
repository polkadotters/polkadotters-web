import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type PackageState = {
    error?: string,
    status: 'idle' | 'loading' | 'success' | 'fail',
}

export const initialState: PackageState = {
    error: null,
    status: 'idle',
}

export const createPackage = createAsyncThunk(
    "Packages/create",
    async (packageList: any, thunkAPI) => {
        /*thunkAPI.dispatch(setMessage({
            message: `Creating package order ${packageList.name}`,
            type: 'info'
        }));

        return await axios.post(`${API_URL}/packages?salesorder_id=${packageList.salesorder_id}`, packageList, {
            headers: authHeader()
        })*/
    }
)

const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createPackage.pending, (state, action) => {
            state.status = 'loading'
        })
    },
})

const {reducer} = packagesSlice;

export default reducer
