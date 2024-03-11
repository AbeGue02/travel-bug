const { Activity } = require('../models')

const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find({})
    res.json(activities)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getActivityById = async (req, res) => {
  try {
    const { id } = req.params
    const activities = await Activity.findById(id)
    if (activities) {
      return res.json(activities)
    }
    return res.status(404).send('Activity item with specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const getActivityByName = async (req, res) => {
  try {
    const name  = req.query.name
    const activities = await Activity.findOne({name: name})
    if (activities.includes(name)) {
      return res.send(name)
    }
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const createActivity = async (req, res) => {
  try {
    const activity = await new Activity(req.body)
    await activity.save()
    return res.status(201).json({activity})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

const updateActivity = async (req, res) => {
  try {
    let { id } = req.params;
    let update_activity = await Activity.findByIdAndUpdate(id, req.body, { new: true })
    if (update_activity) {
      return res.status(200).json(update_activity)
    }
    throw new Error("Activity not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteActivity = async (req, res)=>{
  try {
    const { id } = req.params;
    const deleted = await Activity.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Activity deleted")
    }
    throw new Error('Activity not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllActivities,
  getActivityById,
  getActivityByName,
  createActivity,
  updateActivity,
  deleteActivity
}