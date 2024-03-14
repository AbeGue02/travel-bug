import axios from "axios";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { MdCancel } from "react-icons/md";
import { useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import BASE_URL from "../globals";

export default function CreateActivity({setIsCreatingActivity}) {
    
    const { id } = useParams()

    const initialForm = {
        name: '',
        address: "",
        date: new Date(),
        trip: id,
        category: ''
    }

    const [formInfo, setFormInfo] = useState(initialForm)
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const getCategories = async () => {
            let response = await axios.get(`${BASE_URL}/category`)
            //console.log(response.data)
            setCategories(response.data)
        }

        getCategories()
    }, [])

    const handleChange = async (event) => {
        setFormInfo({ ...formInfo, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setFormInfo({...formInfo})
        console.log(formInfo)
        let response = await axios.post(`${BASE_URL}/activity`,formInfo)
        console.log(response)
        setIsCreatingActivity(false)
    }

    return (
        <div>
            <div className="newActivity">
            <h4>Create New Activity</h4>
            <button
                onClick={() => {setIsCreatingActivity(false)}}><MdCancel /> Close</button>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name"
                    value={formInfo.name}
                    onChange={handleChange}/>
                <label htmlFor="address">Address: </label>
                <input 
                    type="text" 
                    id="address"
                    value={formInfo.address}
                    onChange={handleChange}/>
                <label htmlFor="date">Date: </label>
                <ReactDatePicker 
                    selected={formInfo.date}
                    onSelect={(date) => {setFormInfo({...formInfo, date: date})}}/>
                <label htmlFor="category">Category:</label>
                {
                    categories.length && (
                        <select 
                            id="category" 
                            name="category"
                            onChange={(e) => {setFormInfo({...formInfo, category: e.target.value})}}>
                            {
                                categories.map((category) => (
                                    <option 
                                        value={category._id} 
                                        key={category._id}>{category.name}</option>
                                ))
                            }
                        </select>
                    )
                }

                <button type="submit">Create Activity</button>
                
            </form>
            </div>
        </div>
    )
}