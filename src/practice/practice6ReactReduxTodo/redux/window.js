import { store } from './store';
import { addTodo } from './action';
import { deleteTodo } from './action';
import { changeStatus } from './action';


window.store = store;
window.addTodo = addTodo;
window.deleteTodo = deleteTodo;
window.changeStatus = changeStatus;


