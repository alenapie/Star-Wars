import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TCharacter } from '../types';
import { RootState } from './store';

type TCharactersState = {
    list: TCharacter[];
    count: number;
}

const initialState: TCharactersState = { list: [], count:0};

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharactersList: (state, { payload: { list,count }}: PayloadAction<TCharactersState>) => {
            state.list = list;
            state.count = count;
        },

    }
})

export const { setCharactersList } = charactersSlice.actions;

export const selectCharactersList = (state: RootState) => state.characters.list;

export const selectCharactersCount = (state: RootState) => state.characters.count;

export default charactersSlice.reducer;