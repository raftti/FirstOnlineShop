import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
    name: 'shop',
    initialState: {
        initialList: [],
        cardList: []
    },
    reducers: {
        addToCard: (state, action) => {
            const cardItemId = action.payload;
            const isItemIn = state.cardList.some(item => item.id === cardItemId);
            if(!isItemIn) {
                const cardItem = state.initialList.find((card) => card.id === cardItemId);
                state.cardList.push(cardItem);
            }else alert('Already in!')
        },
        removeFromCard: (state, action) => {
            state.cardList.splice(state.cardList.indexOf(action), 1);
        },
        setInitialList: (state, action) => {
            state.initialList =action.payload
        }
    }
})

export const { addToCard, removeFromCard, setInitialList } = slice.actions

export default slice.reducer