import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        count: 1,
        data: ['прообразом Чубакки стал пёс режиссёра',
            'актёрам разрешили подобрать любимый цвет для своих световых мечей',
            'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
            'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
            'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок.'
        ]
    },
    

    reducers: {
        change(state, action) {
            if (state.count < 5) {
                state.count = action.payload
            }
            else {
                state.count = 1
            }

        },
    }
})


export default toolkitSlice.reducer;
export const { change } = toolkitSlice.actions