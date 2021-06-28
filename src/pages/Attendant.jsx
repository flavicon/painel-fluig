import { useParams } from "react-router-dom"

export function Attendant() {
    let { id } = useParams();

    return (
        <h1>Atendente: {id}</h1>
    )
}