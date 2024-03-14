import axios from "axios"
import { useEffect, useState } from "react"
import {useContext} from 'react'
import UserContext from "../Context"
import BASE_URL from "../globals"

// import components
import TripList from "./TripList"
import CreateTripList from "./CreateTripList"

export default function Home() {
    const [tripLists, setTripLists] = useState([])
    const { user, setUser } = useContext(UserContext)
    const [isCreatingTripList, setIsCreatingTripList ] = useState(false)

    const [addTripList, setAddTripList] = useState(false)

    useEffect(() => {
        const getTriplist = async () => {
            let response = await axios.get(`${BASE_URL}/triplist`) 
            const triplistArr = response.data
            let userTripLists = triplistArr.filter((trip) => trip.user === user._id)
            setTripLists(userTripLists)
        }
        getTriplist()
    }, [addTripList])
    
    const handleClick = () => {
        setIsCreatingTripList(true)
    }

    return (
        <div>
            <div className="tripList">
                <div className="tripCard">
            <h2>Trip Lists</h2>
                </div>
            <button onClick={handleClick}>Add a Trip List</button>
            {isCreatingTripList ? <CreateTripList tripLists={tripLists} setTripLists={setTripLists} addTripList={addTripList} setAddTripList={setAddTripList} /> : null}
            
            {
                tripLists.length 
                ? tripLists.map((tripList) => (
                    <TripList key={tripList._id } tripList={tripList}/>
                )) : (
                    <h4>No results were found.</h4>
                )
            }
            </div>
        </div>
    )
}