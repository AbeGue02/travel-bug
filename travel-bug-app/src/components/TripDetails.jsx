import React from "react"

export default function TripDetails() {
    return (
        <div>
            <h4>{trip.fromCity}, {trip.fromCountry} - {trip.toCity}, {trip.toCountry}</h4>
            <p>Start Date: {trip.startDate}</p>
            <p>End Date: {trip.endDate}</p>
        </div>

    )
}