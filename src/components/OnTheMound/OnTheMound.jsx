import { useSelector } from "react-redux";


export default function OnTheMound(){
    const onTheMound = useSelector((store) => store.onTheMound)
        
    return(
        <h2>On the Mound: {onTheMound}</h2>
    )

}


