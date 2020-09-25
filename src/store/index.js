import { createStore } from 'redux';
import rootReducer from '../reducers';

const INITIAL_STATE = {
    chatStartButton: true,
    welcomePage: true,
    visibilityFilter: "SHOW_ALL",
    currentPageFilter: "SHOW_DASHBOARD",
    todos:[
        {
            id: 0,
            text: "React Redux Boilerplate",
            completed: true
        },
        {
            id: 1,
            text: "Unit Testing",
            completed: true
        },
        {
            id: 3,
            text: "Production Ready",
            completed: true
        },
        {
            id: 4,
            text: "WordPress Ready",
            completed: true
        },
        {
            id: 5,
            text: "Remove Demo",
            completed: true
        },
        {
            id: 6,
            text: "My Awesome React Redux App",
            completed: false
        },
    ]
};
const store = createStore(rootReducer, INITIAL_STATE);
console.log(store.getState());

export default store;
