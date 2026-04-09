import type {IUser} from "../../models/IUser.ts";
import {createSlice} from "@reduxjs/toolkit";
import type PayloadAction from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators.ts";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: "",
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },

        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },

        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    // вызываются для асинхронных actions созданных через createAsyncThunk
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },

        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },

        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default userSlice.reducer;