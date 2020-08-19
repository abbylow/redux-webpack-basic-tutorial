import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { actionSetName } from './store/name/actions/actions'; 
import { actionSetName, actionSetAge, actionSetGender, actionSetUser } from './store/user/actions/actions'; 


const App = () => {
    const {name, age, gender} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newGender, setNewGender] = useState('');


    const onNameChange = (e) => {
        setNewName(e.target.value)
    }

    const onAgeChange = (e) => {
        setNewAge(e.target.value)
    }

    const onGenderChange = (e) => {
        setNewGender(e.target.value)
    }

    const updateNameStore = () => {
        dispatch(actionSetName(newName));
    }

    const updateAgeStore = () => {
        dispatch(actionSetAge(newAge));
    }

    const updateGenderStore = () => {
        dispatch(actionSetGender(newGender));
    }

    const updateUserStore = () => {
        dispatch(actionSetUser({
            name: newName,
            age: newAge,
            gender: newGender
        }));
    }

    return (
        <>
            <h1>{name}</h1>
            <input value={newName} onChange={onNameChange}/>
            <br />
            <button onClick={updateNameStore} >Change Name</button>

            <h1>{age}</h1>
            <input value={newAge} onChange={onAgeChange}/>
            <br />
            <button onClick={updateAgeStore} >Change age</button>

            <h1>{gender}</h1>
            <input value={newGender} onChange={onGenderChange}/>
            <br />
            <button onClick={updateGenderStore} >Change gender</button>
            
            <br />
            <button onClick={updateUserStore} >Change all</button>

        </>
    )
}

export default App;