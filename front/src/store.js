import React, { useReducer, createContext } from 'react';
import listReducer from "./list/reducer";
import itemReducer from "./todo/reducer";

const initialState = {
    list: {
        elements: []
    },
    todo: {
        elements: [],
        item: {}
    },
    mensage: {}
};
const Store = createContext(initialState);

const merge = { ...listReducer(), ...itemReducer() };
function reducer(state, action) {
    console.log("dispatch => ", action.type)
    return merge[action.type] ? merge[action.type](state, action) : state;
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>
};

export default Store;