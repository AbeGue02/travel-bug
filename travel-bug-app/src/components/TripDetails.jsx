import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BASE_URL from '../globals'
import axios from 'axios'

export default function TripDetails() {
    
    const { id } = useParams()

    const [trip, setTrip] = useState()
    const [activities, setActivities] = useState([])

    useEffect(() => {
        const getTrip = async () => {
            let response = await axios.get(`${BASE_URL}/trip/${id}`)
            console.log(response.data)
            setTrip(response.data)
        }
        const getActivities = async () => {
            let response = await axios.get(`${BASE_URL}/trip/${id}/activities`)
            console.log(response.data)
            setActivities(response.data)
        }
        getTrip()
        getActivities()
    }, [])
    
    
    return (
        <>
            {/* Load up specific details from a trip including all their activities */}
            {
                trip ? (
                    <>
                        <div>
                            <h2>{trip.fromCity} - {trip.toCity}</h2>
                            <p>{trip.startDate} - {trip.endDate}</p>
                        </div>
                        <h3>Activities</h3>
                        <div>
                            {
                                activities.length ? (
                                    <>
                                        {
                                            activities.map((activity) => (
                                                <div key={activity._id}>
                                                    <h4>{activity.name}</h4>
                                                </div>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <p>No activities here</p>
                                )
                            }
                        </div>

                    </>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>
    )
}