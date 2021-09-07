import { createSlice } from "@reduxjs/toolkit";

export const initialStateThemeColor: string = "light";

export const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState: { themeSelected: initialStateThemeColor },
  reducers: {
    setTheme: (state, action) => {
      state.themeSelected = action.payload;
    },
   
  },
});

export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;