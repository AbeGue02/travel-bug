import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import BASE_URL from "../globals"
import CreateTrip from "./CreateTrip"
import Trip from './Trip'

export default function TripListDetails() {
    //Shows all the trips within one trip, with the option to both create more and go to the details of one
    
    const { tripListId } = useParams()
    const [tripList, setTripList] = useState()
    const [trips, setTrips] = useState()
    const [isCreatingTrip, setIsCreatingTrip] = useState(false)
    
    const getTripsFromTripList = async (id) => {
        let response = await axios.get(`${BASE_URL}/tripList/${id}/trip`)
        console.log(response)
        setTrips(response.data)
    }
    const getTripList = async () => {
        let response = await axios.get(`${BASE_URL}/tripList/${tripListId}`)
        console.log(response.data)
        setTripList(response.data)
        await getTripsFromTripList(response.data._id)
    }

    useEffect(() => {
        getTripList()
    }, [])

    return (
        <div>
            {
                tripList ? (
                    <>
                        <div>
                            <div className="tripListing">
                        <h2>{tripList.name}</h2>
                        
                        <div className="createTripBtn">
                        <button onClick={() => {setIsCreatingTrip(true)}}>Create Trip</button>
                        </div>
                        </div>
                        <div>
                            {
                                isCreatingTrip && (
                                    <CreateTrip 
                                        setIsCreatingTrip={setIsCreatingTrip}
                                        getTrips={getTripsFromTripList}/>
                                )
                            }
                            {
                                trips ? (
                                    <>
                                        {
                                            trips.map((trip) => (
                                                <Trip trip={trip} key={trip._id}/>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <h4>No trips here...</h4>
                                )
                            }
                        </div>
                        </div>
                    </>
                ) : (
                    <h4>Loading</h4>
                )
            }
        </div>
    )
}