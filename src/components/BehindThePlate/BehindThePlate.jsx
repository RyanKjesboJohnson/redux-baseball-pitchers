import { useSelector } from "react-redux";


export default function BehindThePlate(){
    const behindThePlate = useSelector((store) => store.behindThePlate)
        
    return(
        <h2>Behind the Plate: {behindThePlate}</h2>
    )

}
