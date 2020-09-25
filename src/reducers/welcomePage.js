// import { chatStartButtons } from '../actions'

const welcomePage = (state = true, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'CHAT_WELCOME_PAGE': 
      return !state.welcomePage
    default:
      return state
  }
  
}

export default welcomePage