import { useState } from "react";
import { MdCancel } from "react-icons/md";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import BASE_URL from "../globals";
import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import UserContext from '../Context'

export default function CreateTrip({ setIsCreatingTrip, getTrips }) {
    
    const {tripListId} = useParams()
    // const {user, setUser} = useContext(UserContext)

    const initialForm = {
        tripList: tripListId,
        fromCity: '',
        fromState: '',
        fromCountry: '',
        toCity: '',
        toState: '',
        toCountry: '',
        startDate: new Date(),
        endDate: new Date(),
    }
    
    const [formInfo, setFormInfo] = useState(initialForm)
    const [error, setError] = useState('')

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = async (event) => {
        event.preventDefault()

        // validation checks

        // if (formInfo.endDate < formInfo.startDate) {
        //     setError("End date cannot be before start date")
        //     alert(error)
        // }

        // if (!formInfo.fromCity || formInfo.fromCity.length <3) {
        //     setError("From city must be at least three characters long")
        //     console.log(error)
        //     return alert(error)
        // }

        // if (!formInfo.toCity || formInfo.toCity.length <3) {
        //     setError("To city must be at least three character long")
        //     return
        // }

        // if (formInfo.fromCity === formInfo.toCity && formInfo.fromCountry === formInfo.toCountry) {
        //     setError("Trip destination cannot be the same as the starting point")
        //     return
        // }

        // If all vaildation check pass, proceed with form submission

        // setError("")

        try {
            await axios.post(`${BASE_URL}/trip`, formInfo)
            getTrips(tripListId)
            // setFormInfo(initialForm)
            setIsCreatingTrip(false)
    } catch (error) {
        console.error("Error creating trip:", error)
    }
}
    
    return (
        <div className="createTripContainer">
            <div className="createTripHeader">
                <h3>Create Trip</h3>
                <button onClick={() => {setIsCreatingTrip(false)}}><MdCancel/></button>
            </div>

            <form onSubmit={formOnSubmit}>
                <h4>From:</h4>
                <label htmlFor="fromCity">City</label>
                <input 
                    type="text" 
                    value={formInfo.fromCity} 
                    onChange={formOnChange}
                    id="fromCity" />
                <label htmlFor="fromState">State</label>
                <input 
                    type="text" 
                    value={formInfo.fromState} 
                    onChange={formOnChange}
                    id="fromState" />
                <label htmlFor="fromCountry">Country</label>
                <input 
                    type="text" 
                    value={formInfo.fromCountry} 
                    onChange={formOnChange}
                    id="fromCountry" />

                <h4>To:</h4>
                <label htmlFor="toCity">City</label>
                <input 
                    type="text" 
                    value={formInfo.toCity} 
                    onChange={formOnChange}
                    id="toCity" />
                <label htmlFor="toState">State</label>
                <input 
                    type="text" 
                    value={formInfo.toState} 
                    onChange={formOnChange}
                    id="toState" />
                <label htmlFor="toCountry">Country</label>
                <input 
                    type="text" 
                    value={formInfo.toCountry} 
                    onChange={formOnChange}
                    id="toCountry" />

                <label htmlFor="startDate">Start Date</label>
                <DatePicker 
                    id="startDate"
                    selected={formInfo.startDate} 
                    onSelect={(date) => { setFormInfo({ ...formInfo, startDate: date })}}/>

                <label htmlFor="endDate">End Date</label>
                <DatePicker 
                    id="endDate"
                    selected={formInfo.endDate} 
                    onSelect={(date) => { setFormInfo({ ...formInfo, endDate: date })}}/>
                <button type="submit">Add Trip</button>
            </form>
        </div>
    )
}