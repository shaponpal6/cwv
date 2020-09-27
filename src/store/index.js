import React, {createContext, useReducer} from "react";
import Reducer from '../reducers';
import InitState from './state'; 


const initialState = {
    ...InitState,
    posts: [],
    error: null
};
export const AppContext = createContext(initialState);


const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
};


export default AppContextProvider;