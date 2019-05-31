import { SELECT_MOVIE_SEAT, DESELECT_MOVIE_SEAT } from './constant';


export const selectMovieSeat = (seat) => ({
    type: SELECT_MOVIE_SEAT,
    payload: seat
});

export const deSelectMovieSeat = (seat) => ({
    type: DESELECT_MOVIE_SEAT,
    payload: seat
});





