import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TCharacter } from '../types';
import { RootState } from './store';

type TCharacterState = {
    card: TCharacter | null;
}

const initialState: TCharacterState = {
    card: null
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacterCard: (state, { payload: { card }}: PayloadAction<TCharacterState>) => {
            state.card = card;
        },
    },

});

export const { setCharacterCard } = characterSlice.actions;

export const selectCharacterCard = (state: RootState) => state.character.card;

export default characterSlice.reducer;
