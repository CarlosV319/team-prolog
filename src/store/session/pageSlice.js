import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        isLoadingEvents: true,
        events: [

        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload }) => {
            state.activeEvent = payload;
        },
        onLogoutPage: (state) => {
            state.isLoadingEvents = true,
                state.events = [],
                state.activeEvent = null
        }
    }
});

export const {
    onSetActiveEvent,
    onLogoutPage
} = pageSlice.actions
