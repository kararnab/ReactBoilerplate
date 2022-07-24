import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatus } from '../../services/util';
import { performLogin } from '../thunk/userThunk';

export interface ILogin {
    status: IStatus,
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
    status: {
        isLoading: false,
        errorMsg: ''
    },
    authKey: '',
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<ILogin>) => {
            console.log('Reducer: Signin');
            state.authKey = action.payload.authKey;
            state.user = action.payload.user;
        },
        signOut: (state) => {
            state.authKey = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(performLogin.pending, (state, action) => {
            state.status = { isLoading: true, errorMsg: '' };
        });
        builder.addCase(performLogin.fulfilled, (state, action) => {
            //TODO: action.payload
            console.log('Reducer: Signin Fulfuilled');
            console.log(state);
            console.log(action);
            state.status = { isLoading: false, errorMsg: '' };
            state.authKey = 'asqwdeqwf234cas';
        });
        builder.addCase(performLogin.rejected, (state, action) => {
            state.status = { isLoading: false, errorMsg: 'Something went wrong' };
            state.authKey = '';
        });
    },
});

export const { signIn, signOut } = userSlice.actions;
export default userSlice.reducer;