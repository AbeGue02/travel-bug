import { useNavigate } from "react-router-dom"

export default function TripList({tripList}) {
    
    // A Trip List that renders inside of the Home component. It should have a button that takes you to trip List Details
    const navigate = useNavigate()

    return (
        <div>
            <h3>{tripList.name}</h3>
            <button>Go to Details</button>
        </div>
    )
}