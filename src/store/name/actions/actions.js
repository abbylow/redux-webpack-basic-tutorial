const Actions = {
    SET_NAME: 'SET_NAME',
}

// helper func to create an object with type and payload
const actionSetName = payload => ({ type: Actions.SET_NAME, payload });

export { Actions, actionSetName };