import { Actions } from '../actions/actions';

// function for each action
const reducerSetName = (state, name) => {
    return { ...state, name };
}

const reducerSetAge = (state, age) => {
    return { ...state, age };
}

const reducerSetGender = (state, gender) => {
    return { ...state, gender };
}

const reducerSetUser = (state, user) => {
    return { ...state, ...user };
}

const actionReducerMap = {
    [Actions.SET_NAME]: reducerSetName,
    [Actions.SET_AGE]: reducerSetAge,
    [Actions.SET_GENDER]: reducerSetGender,
    [Actions.SET_USER]: reducerSetUser,
}

export default actionReducerMap;