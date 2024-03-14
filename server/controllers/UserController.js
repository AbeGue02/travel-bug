const { User } = require('../models')


const loginUser = async (req, res) => {
  const { emailorUsername, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }], password: password });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    return res.status(404).send('User with specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const getUserByName = async (req, res) => {
  try {
    const name  = req.query.name
    const user = await User.findOne({name: name})
    if (User.includes(name)) {
      return res.send(name)
    }
  } catch (error) {
    return res.status(500).send(error.message)
 }
}

const createUser = async (req, res) => {
  try {
    const { email, username } = req.body;
    
    const existingUser = await User.findOne({ $or: [{ email: email }, { username: username }] });

    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already exists' });
    }

    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    if (!savedUser) {
      return res.status(500).json({ error: 'Failed to save user' });
    }

    return res.status(201).json( newUser );
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: 'Failed to create user', message: error.message });
  }
}

const updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let update_user = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (update_user) {
      return res.status(200).json(update_user)
    }
    throw new Error("User not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("User deleted")
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  loginUser,
  getAllUsers,
  getUserById,
  getUserByName,
  createUser,
  updateUser,
  deleteUser
}