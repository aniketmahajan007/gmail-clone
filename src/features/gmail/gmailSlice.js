import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userdata:[],
    compose_message_is_open: false,
    message_selected: {}
};

export const gmailSlice = createSlice({
    name: 'gmail',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        if_message_select: (state,action) => {
            state.message_selected = action.payload;
        },
        if_message_deselect: state => {
            state.message_selected = {};
        },
        compose_message_open: state => {
            state.compose_message_is_open = true;
        },
        compose_message_close: state => {
            state.compose_message_is_open = false;
        },
        update_user_info: (state, action) => {
            state.userdata = action.payload
        }
    }
});

export const { update_user_info, compose_message_close, compose_message_open, if_message_select, if_message_deselect} = gmailSlice.actions;

export default gmailSlice.reducer;
