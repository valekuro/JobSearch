import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ThemeSlice from '../components/reducers/ThemeSlice';
import JobSlice from '../components/reducers/JobSlice';
export const store = configureStore({
  reducer: {
    ThemeSlice,
    JobSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;