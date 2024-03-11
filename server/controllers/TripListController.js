const { TripList } = require('../models')

const getAllTripLists = async (req, res) => {
  try {
    const tripLists = await TripList.find({})
    res.json(tripLists)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getTripListById = async (req, res) => {
  try {
    const { id } = req.params
    const tripList = await Category.findById(id)
    if (tripList) {
      return res.json(tripList)
    }
    return res.status(404).send('TripList item with specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const getTripListByName = async (req, res) => {
  try {
    const name  = req.query.name
    const tripList = await TripList.findOne({name: name})
    if (tripList.includes(name)) {
      return res.send(name)
    }
  } catch (error) {
    return res.status(500).send(error.message)
 }
}


const createTripList = async (req, res) => {
  try {
    const tripList = await new TripList(req.body)
    await TripList.save()
    return res.status(201).json({tripList})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

const updateTripList = async (req, res) => {
  try {
    let { id } = req.params;
    let update_tripList = await TripList.findByIdAndUpdate(id, req.body, { new: true })
    if (update_tripList) {
      return res.status(200).json(update_tripList)
    }
    throw new Error("Trip List not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteTripList = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TripList.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Trip List deleted")
    }
    throw new Error('Trip List not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllTripLists,
  getTripListById,
  getTripListByName,
  createTripList,
  updateTripList,
  deleteTripList
}