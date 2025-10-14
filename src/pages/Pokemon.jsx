import { useParams } from "react-router-dom";

export default function Pokemon(){

    const {nombre} = useParams();

    return (
        <h1> {nombre} </h1>
    )

}