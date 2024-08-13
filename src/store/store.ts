import { configureStore } from '@reduxjs/toolkit'
import  charactersSlice  from './charactersSlice'
import characterSlice from './characterSlice'

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    character: characterSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch