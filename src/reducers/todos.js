import {firebaseEvents} from '../firebase/firebaseEvents';

const todos = (state = [], action) => {
  const db = new firebaseEvents();
  switch (action.type) {
    case 'ADD_TODO':
      db.saveMessage(action);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }

};

export default todos;
