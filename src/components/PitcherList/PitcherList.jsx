import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function PitcherList(){
    const pitcherList = useSelector((store) => store.pitcherList)
    
    const dispatch = useDispatch()

    const setOnTheMound = (pitcher) => {
        dispatch({
            type: 'PITCHER_ON_MOUND',
            payload: pitcher
          })
    }

return(
    <ul>
        {pitcherList.map(pitcher => (
            <li onClick={() => setOnTheMound(pitcher)}>
        {pitcher}
        </li>))}
    </ul>
    )
}