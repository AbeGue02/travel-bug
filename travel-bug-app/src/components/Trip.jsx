export default function Trip({trip}) {
    return (
        <div className="trip">
            <h4>{trip.fromCity} - {trip.toCity}</h4>
            <button>Go to Details</button>
        </div>
    )
}