import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modals: [],

};

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        append: (state, action) => {
            state.modals = [...state.modals, action.payload];
        },
        destroy: state => {
            const data = [...state.modals];
            data.pop();
            state.modals = data;
        },
        destroyAll: state => {
            state.modals = [];
        },
    }
});

export const { append, destroy, destroyAll } = modal.actions;
export default modal.reducer;