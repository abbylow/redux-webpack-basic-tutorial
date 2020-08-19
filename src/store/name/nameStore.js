import actionReducerMap from './reducers/reducer';

const initialState = 'Hello :)';

// const reducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case 'SET_NAME':
//             return reducerSetName(state, payload);
//         default:
//             return state;
//     }
// }

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    if(actionReducerMap[type]) {
        return actionReducerMap[type](state, payload);
    }
    return state;
};

export default reducer;