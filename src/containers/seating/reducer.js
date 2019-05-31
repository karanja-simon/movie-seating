import { SELECT_MOVIE_SEAT, DESELECT_MOVIE_SEAT } from './constant';


const initialState = [];

export const movieReducer = (state = initialState, action) => {

    switch (action.type) {

        case SELECT_MOVIE_SEAT:
            return [...state, action.payload];

        case DESELECT_MOVIE_SEAT:
            const removeSelected = state.filter((seat) => {
                return (seat.id !== action.payload.id);
            });
            return removeSelected;

        default:
            return state;
    }

}