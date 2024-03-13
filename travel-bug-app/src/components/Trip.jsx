export default function Trip({trip}) {
    return (
        <>
            <h4>{trip.fromCity} - {trip.toCity}</h4>
            <button>Go to Details</button>
        </>
    )
}