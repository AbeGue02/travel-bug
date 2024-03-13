import React from "react"

export default function Trip({trip}) {

    return (
        <div>
            <h4>{trip.fromCity} - {trip.toCity}</h4>
            <p>Start Date: {trip.startDate}</p>
            <p>End Date: {trip.endDate}</p>
            <button>Go to Details</button>
        </div>
    )
}