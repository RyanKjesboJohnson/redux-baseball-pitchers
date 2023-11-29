import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function CatcherList(){
    const catcherList = useSelector((store) => store.catcherList)
    
    const dispatch = useDispatch()

    const setBehindThePlate = (catcher) => {
        dispatch({
            type: 'CATCHER_BEHIND_THE_PLATE',
            payload: catcher
          })
    }

return(
    <ul>
        {catcherList.map(catcher => (
            <li onClick={() => setBehindThePlate(catcher)}>
        {catcher}
        </li>))}
    </ul>
    )
}