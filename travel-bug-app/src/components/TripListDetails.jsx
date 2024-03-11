import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import BASE_URL from "../globals"

export default function TripListDetails() {
    //Shows all the trips within one trip, with the option to both create more and go to the details of one
    
    const { tripListId } = useParams()
    const [tripList, setTripList] = useState()
    
    useEffect(() => {
        const getTripList = async () => {
            let response = await axios.get(`${BASE_URL}/tripList/${tripListId}`)
            console.log(response.data)
            setTripList(response.data)
        }

        //getTripList()
    }, [])

    return (
        <>
            {
                tripList ? (
                    <>
                        <h2>{tripList.name}</h2>
                        {/* Display all trips using a map statement */}
                    </>
                ) : (
                    <h4>Loading</h4>
                )
            }
        </>
    )
}