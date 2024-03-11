const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const PORT = process.env.PORT || 3001

// import controllers
const UserController = require('./controllers/UserController')
const ActivityController = require('./controllers/ActivityController')
const TripController = require('./controllers/TripController')
const TripListController = require('./controllers/TripListController')
const CategoryController = require('./controllers/CategoryController')


const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('welcome to our landing page!'))

// User
app.get('/user', UserController.getAllUsers)
app.get('/user/:id', UserController.getUserById)
// Get User by name
// app.get('/user/', UserController.getUserByName)
app.post('/user', UserController.createUser)
app.put('/user', UserController.updateUser)
app.delete('/user', UserController.deleteUser)

// Trip
app.get('/trip', TripController.getAllTrips)
app.get('/trip/:id', TripController.getTripById )
// Get Trip by name
// app.get('/trip/', TripController.getTripByName)
app.post('/trip', TripController.createTrip)
app.put('/trip', TripController.updateTrip)
app.delete('/user', TripController.deleteTrip)

// TripList
app.get('/triplist', TripListController.getAllTripLists)
app.get('/triplist/:id', TripListController.getTripListById )
// Get TripList by name
// app.get('/triplist/', TripListController.getTripListByName)
app.post('/triplist', TripListController.createTripList)
app.put('/triplist', TripListController.updateTripList)
app.delete('/triplist', TripListController.deleteTripList)

// Activity
app.get('/actvity', TripListController.getAllTripLists)
app.get('/actvity/:id', TripListController.getTripListById )
// Get TripList by name
// app.get('/triplist/', TripListController.getTripListByName)
app.post('/actvity', TripListController.createTripList)
app.put('/actvity', TripListController.updateTripList)
app.delete('/actvity', TripListController.deleteTripList)

// Category
app.get('/category', CategoryController.getAllCategories)
app.get('/category/:id', CategoryController.getCategoryById )
// Get TripList by name
// app.get('/category/', CategoryController.getCategoryByName)
app.post('/category', CategoryController.createCategory)
app.put('/category', CategoryController.updateCategory)
app.delete('/category', CategoryController.deleteCategory)