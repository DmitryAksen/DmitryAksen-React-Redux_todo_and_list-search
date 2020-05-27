import { ADD_TODO } from './constant';
import { CHANGE_STATUS } from './constant';
import { DELETE_TODO } from './constant';
import { DATA_LOADED } from './constant';
import { FILMS_LOADED } from './constant';

export function addTodo(payload) {
    return { type: ADD_TODO, payload }
}
export function changeStatus(payload) {
    return { type: CHANGE_STATUS, payload }
}
export function deleteTodo(payload) {
    return { type: DELETE_TODO, payload }
}
export function getData() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            })
    }
}
export function getFilms() {
    return function (dispatch) {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(json => {
                dispatch({ type: FILMS_LOADED, payload: json })
            })
    }
}
