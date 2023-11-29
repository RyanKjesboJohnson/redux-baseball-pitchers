import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function CatcherForm() {
    const [newCatcher, setNewCatcher] = useState('');
    const handleCatcherNameChange = event => {
        setNewCatcher(event.target.value);
      };

    const dispatch = useDispatch()

  // add new pitcher to the array. this will move to the pitcher reducer!
    const handleCatcherSubmit = (e) => {
        e.preventDefault();
        dispatch({
        type: 'ADD_NEW_CATCHER',
        payload: newCatcher
        })
        setNewCatcher('');
    };

    return(
        <form onSubmit={handleCatcherSubmit}>
            <input
            type="text"
            value={newCatcher}
            onChange={handleCatcherNameChange}
            placeholder="New Catcher Name"
            />
            <button type="submit">Add Catcher</button>
        </form>
    )

}
