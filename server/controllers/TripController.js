const { Trip } = require('../models')

const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({})
    res.json(trips)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTripById = async (req, res) => {
  try {
    const { id } = req.params
    const trip = await Trip.findById(id)
    if (trip) {
      return res.json(trip)
    }
    return res.status(404).send('Trip item with specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const getTripByName = async (req, res) => {
  try {
    const name  = req.query.name
    const trip = await Trip.findOne({name: name})
    if (trip.includes(name)) {
      return res.send(name)
    }
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const getTripsByTripList = async (req, res) => {
  try {
    const trip = await Trip.find({tripList: req.params.id })
    if (trip) {
      return res.json(trip)
    }
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const createTrip = async (req, res) => {
  try {
    const trip = await new Trip(req.body)
    await trip.save()
    return res.status(201).json({trip})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

const updateTrip = async (req, res) => {
  try {
    let { id } = req.params;
    let update_trip = await Trip.findByIdAndUpdate(id, req.body, { new: true })
    if (update_trip) {
      return res.status(200).json(update_trip)
    }
    throw new Error("Trip not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Trip deleted")
    }
    throw new Error('Trip not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTrips,
  getTripById,
  getTripByName,
  getTripsByTripList,
  createTrip,
  updateTrip,
  deleteTrip
}