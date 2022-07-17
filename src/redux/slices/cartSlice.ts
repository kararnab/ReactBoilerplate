import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICart {
    itemId: number,
    count: number,
    meta: {
        itemName: string,
        itemPrice: number,
        currency: string,
    }
}

const initialState: { data: ICart[] } = {
    data: [],
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICart>) => {
            state.data = [...state.data, action.payload];
        },
        removeFromCart: (state, action: PayloadAction<ICart>) => {
            state.data = state.data.filter(item => item.itemId != action.payload.itemId);
        },
        clearCart: (state) => {
            state.data = [];
        },
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;