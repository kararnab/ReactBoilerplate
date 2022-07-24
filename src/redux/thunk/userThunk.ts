import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/auth.service';

export const performLogin = createAsyncThunk(
    '/login',
    async (data: { userId: string, password: string }, thunkAPI) => {
        const { userId, password } = data;
        let response;
        try {
            response = await authService.login(userId, password);
            console.log(response);
            return thunkAPI.fulfillWithValue(response);
        } catch (err) {
            console.log('UserThunk-->');
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);