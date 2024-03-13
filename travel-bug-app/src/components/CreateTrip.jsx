import { useState } from "react";
import { MdCancel } from "react-icons/md";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import BASE_URL from "../globals";
import { useParams } from "react-router-dom";

export default function CreateTrip({ setIsCreatingTrip, getTrips }) {
    
const {tripListId} = useParams()

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
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const formOnChange = (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const formOnSubmit = async (event) => {
        event.preventDefault()
        setFormInfo({...formInfo, startDate: startDate, endDate: endDate})
        await axios.post(`${BASE_URL}/trip`, formInfo)
        setFormInfo(initialForm)
        setIsCreatingTrip(false)
        getTrips(tripListId)
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
                    selected={startDate} 
                    onChange={(date) => {setStartDate(date)}}/>

                <label htmlFor="endDate">End Date</label>
                <DatePicker 
                    selected={endDate} 
                    onChange={(date) => {setEndDate(date)}}/>

                <button type="submit">Create Trip</button>
            </form>
        </div>
    )
}