import { createSlice } from '@reduxjs/toolkit';

                                   
export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        isLoadingProfile: true,
        profileUser: null
    },
    reducers: {
        onSetUserProfile: ( state, { payload } ) => {

            state.profileUser = payload;
        },
        
        onUpdateUserProfile: ( state, { payload } ) => {
        // Modificar evento y guardar cambios

            state.profileUser = payload;
        },

        onLoadProfile: ( state ) => {

            state.isLoadingProfile = false;
        },

        onLogoutProfile: ( state ) => {

            state.isLoadingProfile = true,
            state.profileUser = null
        }

    }
});
// Action creators are generated for each case reducer function
export const {  onSetUserProfile,
                onUpdateUserProfile,
                onLoadProfile,
                onLogoutProfile } = profileSlice.actions;