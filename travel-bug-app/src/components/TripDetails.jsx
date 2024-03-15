import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BASE_URL from '../globals'
import axios from 'axios'
import { IoMdAddCircle } from "react-icons/io";
import CreateActivity from './CreateActivity';

export default function TripDetails() {
    
    const { id } = useParams()

    const [trip, setTrip] = useState()
    const [activities, setActivities] = useState([])
    const [isCreatingActivity, setIsCreatingActivity] = useState(false)
    
    const getActivities = async () => {
        let response = await axios.get(`${BASE_URL}/trip/${id}/activities`)
        console.log(response.data)
        setActivities(response.data)
    }

    useEffect(() => {
        const getTrip = async () => {
            let response = await axios.get(`${BASE_URL}/trip/${id}`)
            console.log(response.data)
            setTrip(response.data)
        }
        getTrip()
        getActivities()
    }, [])
    
    useEffect(() => {
        !isCreatingActivity && getActivities()
    }, [isCreatingActivity])
    
    return (
        <>
            {/* Load up specific details from a trip including all their activities */}
            {
                trip ? (
                    <>
                        <div>
                            <div className='activityDetails'>
                            <h2>{trip.fromCity} - {trip.toCity}</h2>
                            <p>{trip.startDate} - {trip.endDate}</p>
                        </div>
                        <div className='PITABtn'>
                        <h3>Activities</h3>
                        <button
                            onClick={() => {setIsCreatingActivity(true)}}><IoMdAddCircle /> Create Activity</button>
                            </div>
                        <div>
                            </div>
                            {
                                isCreatingActivity && (
                                    <CreateActivity setIsCreatingActivity={setIsCreatingActivity}/>
                                )
                            }
                            {
                                activities.length ? (
                                    <>
                                        {
                                            activities.map((activity) => (
                                                <div key={activity._id}>
                                                    <h4>{activity.name}</h4>
                                                    <h5>{activity.date}</h5>
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