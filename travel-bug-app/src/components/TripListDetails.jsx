import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import BASE_URL from "../globals"
import CreateTrip from "./CreateTrip"

export default function TripListDetails() {
    //Shows all the trips within one trip, with the option to both create more and go to the details of one
    
    const { tripListId } = useParams()
    const [tripList, setTripList] = useState()
    const [trips, setTrips] = useState()
    const [isCreatingTrip, setIsCreatingTrip] = useState(false)
    
    useEffect(() => {
        const getTripsFromTripList = async (id) => {
            let response = await axios.get(`${BASE_URL}/tripList/${tripListId}/trip`)
            console.log(response.data)
            setTrips(response.data)
        }
        const getTripList = async () => {
            let response = await axios.get(`${BASE_URL}/tripList/${tripListId}`)
            console.log(response.data)
            setTripList(response.data)
            getTripsFromTripList(response.data._id)
        }

        getTripList()
    }, [])

    return (
        <>
            {
                tripList ? (
                    <>
                        <h2>{tripList.name}</h2>
                        <button onClick={() => {setIsCreatingTrip(true)}}>Create Trip</button>
                        <div>
                            {
                                isCreatingTrip && (
                                    <CreateTrip setIsCreatingTrip={setIsCreatingTrip}/>
                                )
                            }
                            {
                                trips.length ? (
                                    <>
                                        {
                                            trips.map((trip) => (
                                                <Trip trip={trip}/>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <h4>No trips here...</h4>
                                )
                            }
                        </div>
                    </>
                ) : (
                    <h4>Loading</h4>
                )
            }
        </>
    )
}