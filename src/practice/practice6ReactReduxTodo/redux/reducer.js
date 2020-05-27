import { CHANGE_STATUS } from './constant';
import { ADD_TODO } from './constant';
import { DELETE_TODO } from './constant';
import { DATA_LOADED } from './constant';
import { FILMS_LOADED } from './constant';



const initialState = {
    todos: [{ title: "esterday", status: false }, { title: "today", status: false}, { title: "tommorow", status: false }],
    remoteTodos: [],
    remoteFilms: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            const copyItem = {...state.todos[action.payload], status: !state.todos[action.payload].status};
            const copyTodos = [...state.todos];
            copyTodos[action.payload] = copyItem
            return Object.assign({}, state, {
                todos: copyTodos
            })
        
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload)
            })
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo, index) => {
                    return index !== action.payload
                })
            })
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteTodos: state.remoteTodos.concat(action.payload)
            })
        case FILMS_LOADED:
            return Object.assign({}, state, {
                remoteFilms: state.remoteFilms.concat(action.payload)
            })
    }
    return state;
}

export default rootReducer


