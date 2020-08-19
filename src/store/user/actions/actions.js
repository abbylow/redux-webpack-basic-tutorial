const Actions = {
    SET_NAME: 'SET_NAME',
    SET_AGE: 'SET_AGE',
    SET_GENDER: 'SET_GENDER',
    SET_USER: 'SET_USER',
}

// helper func to create an object with type and payload
const actionSetName = payload => ({ type: Actions.SET_NAME, payload });
const actionSetAge = payload => ({ type: Actions.SET_AGE, payload });
const actionSetGender = payload => ({ type: Actions.SET_GENDER, payload });
const actionSetUser = payload => ({ type: Actions.SET_USER, payload });

export { Actions, actionSetName, actionSetAge, actionSetGender, actionSetUser };