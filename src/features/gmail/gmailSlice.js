import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    compose_message_is_open: false
};

export const gmailSlice = createSlice({
    name: 'gmail',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        compose_message_open: state => {
            state.compose_message_is_open = true;
        },
        compose_message_close: state => {
            state.compose_message_is_open = false;
        }
    }
});

export const { compose_message_close, compose_message_open } = gmailSlice.actions;

export default gmailSlice.reducer;
