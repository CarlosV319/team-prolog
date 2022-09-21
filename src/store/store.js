import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { profileSlice } from './profile';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        profile: profileSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
