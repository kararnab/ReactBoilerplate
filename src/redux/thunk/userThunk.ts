import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/auth.service';

export const performLogin = createAsyncThunk(
    '/login',
    async (data: { userId: string, password: string }, thunkAPI) => {
        const { userId, password } = data;
        const response = await authService.login(userId, password);
        return response;
    }
);