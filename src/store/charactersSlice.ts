import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TCharacter } from '../types';
import { RootState } from './store';

type TCharactersState = {
    list: TCharacter[];
}

const initialState: TCharactersState = { list: [] };

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharactersList: (state, { payload: { list }}: PayloadAction<TCharactersState>) => {
            state.list = list;
        }
    }
})

export const { setCharactersList } = charactersSlice.actions;

export const selectCharactersList = (state: RootState) => state.characters.list;

export default charactersSlice.reducer;