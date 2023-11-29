import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function PitcherForm() {
    const [newPitcher, setNewPitcher] = useState('');
    const handlePitcherNameChange = event => {
        setNewPitcher(event.target.value);
      };

    const dispatch = useDispatch()

  // add new pitcher to the array. this will move to the pitcher reducer!
    const handlePitcherSubmit = (e) => {
        e.preventDefault();
        dispatch({
        type: 'ADD_NEW_PITCHER',
        payload: newPitcher
        })
        setNewPitcher('');
    };

    return(
        <form onSubmit={handlePitcherSubmit}>
            <input
            type="text"
            value={newPitcher}
            onChange={handlePitcherNameChange}
            placeholder="New Pitcher Name"
            />
            <button type="submit">Add Pitcher</button>
        </form>
    )

}
