// import { chatStartButtons } from '../actions'

const chatStartButton = (state = false, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'CHAT_START_BUTTON': 
      return {chatStartButton: !state.chatStartButton }
    default:
      return state
  }
  
}

export default chatStartButton