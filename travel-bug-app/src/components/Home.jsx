import { useEffect, useState } from "react"
import TripList from "./TripList"

export default function Home() {
    
    const [tripLists, setTripLists] = useState([])

    useEffect(() => {
        console.log('Get trip lists to render on the page')
    }, [])
    
    return (
        <>
            <h2>Trip Lists</h2>
            <button>Add a Trip List</button>
            {
                tripLists.length 
                ? tripLists.map((tripList) => (
                    <TripList tripList={tripList}/>
                )) : (
                    <h4>No results were found.</h4>
                )
            }
        </>
    )
}