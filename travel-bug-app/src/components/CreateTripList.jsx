import React from "react"
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker"
import { useContext } from "react";
import UserContext from "../Context";
import BASE_URL from "../globals";

import "react-datepicker/dist/react-datepicker.css";

export default function CreateTripList({ tripLists, setTripLists, addTripList, setAddTripList }) {
  const { user, setUser } = useContext(UserContext)
  const initialState = {
    name: '',
    startDate: new Date(),
    endDate: new Date(),
    user: user._id,
  }
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async(event) => {
    event.preventDefault()

    // validation check for end date before start date

    if (new Date(formState.endDate) < new Date(formState.startDate)) {
      console.error("End date cannot be before start date")
      return
    }

    // validation check for empty or short name 

    if (!formState.name || formState.name.length <3) {
      console.error("Name must be at least three characters long")
      return
    }

    // validation check for exiting trip list with the same destination

    const isExitingTripList = tripLists.some((tripList) => {
      return (
        tripList.name === formState.name &&
        tripList.startDate === formState.startDate &&
        tripList.endDate === formState.endDate
      )
    })

    if (isExitingTripList) {
      console.error("A trip list with the same name and dates already exists")
      return
    }

    // If all validation checks pass, proceed with form submission

    setFormState({...formState, endDate: endDate, startDate: startDate})
    await axios.post(`${BASE_URL}/triplist`, formState)
    setTripLists({ ...tripLists, formState })
    setAddTripList(true)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }
    return (
      <div>
        <form onSubmit={handleSubmit }>
          <label htmlFor="name">Trip List Name</label>
          <input type='text' name='name' id='name' value={formState.name} onChange={handleChange}></input>

          <label htmlFor="startDate">Trip Start Date</label>
          <DatePicker
            id='startDate'
            selected={startDate}
            // onSelect={handleChange}
            onChange={(date) => setStartDate(date)}
          />

          <label htmlFor="endDate">Trip End Date</label>
          <DatePicker
            id='endDate'
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />

          <button type='submit'>Add</button>
        </form>
      </div>
    );


  // return (
  //   <>
  //     <form>
  //       <label></label>
  //       <input></input>
  //       <DatePicker />
  //     </form>
  //   </>
  // )
}