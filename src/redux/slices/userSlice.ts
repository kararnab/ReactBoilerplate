import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILogin {
    authKey: string,
    user?: IUser,
}

interface IUser {
    id: string,
    name: string,
    phoneNumber?: string,
    emailId?: string,
}

const initialState: ILogin = {
    authKey: '',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<ILogin>) => {
            state.authKey = action.payload.authKey;
            state.user = action.payload.user;
        },
        signOut: (state) => {
            state.authKey = '';
        }
    }
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;