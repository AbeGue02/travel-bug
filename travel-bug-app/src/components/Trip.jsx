import React from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Trip({trip}) {

    const { tripListId } = useParams()
    let navigate = useNavigate()

    return (
        <div className="trip">
            <h4>{trip.fromCity} - {trip.toCity}</h4>
            <p>Start Date: {trip.startDate}</p>
            <p>End Date: {trip.endDate}</p>
            <button onClick={() => {navigate(`/${tripListId}/trips/${trip._id}`)}}>Go to Details</button>
        </div>
    )
}