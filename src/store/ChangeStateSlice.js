import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarShow: true,
  togglebar:false
};

const ChangeStateSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state,action) => {
      state.sidebarShow = action.payload;
    },
    toggleMenubar: (state,action) => {
        state.togglebar = action.payload;
      },
  },
});

export const { toggleSidebar , toggleMenubar} = ChangeStateSlice.actions;

export default ChangeStateSlice.reducer;
