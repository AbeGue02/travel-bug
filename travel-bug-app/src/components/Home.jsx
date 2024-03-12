import axios from "axios"
import { useEffect, useState } from "react"
import TripList from "./TripList"
import {useContext} from 'react'
import UserContext from "../Context"
import BASE_URL from "../globals"

export default function Home() {
    const [tripLists, setTripLists] = useState([])
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {
        const getTriplist = async () => {
            let response = await axios.get(`${BASE_URL}/triplist`) 
            const triplistArr = response.data
            let userTripLists = triplistArr.filter((trip) => trip.user === user._id)
            setTripLists(userTripLists)
        }
        getTriplist()
    }, [])
    
    return (
        <div>
            <h2>Trip Lists</h2>
            <button>Add a Trip List</button>
            {
                tripLists.length 
                ? tripLists.map((tripList) => (
                    <TripList key={tripList._id } tripList={tripList}/>
                )) : (
                    <h4>No results were found.</h4>
                )
            }
        </div>
    )
}