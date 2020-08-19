import { Actions } from '../actions/actions';

// function for each action
const reducerSetName = (state, name) => {
    return name;
}

const actionReducerMap = {
    [Actions.SET_NAME]: reducerSetName,
}

export default actionReducerMap;