module.exports = {

    async getAllUsers(req, res) {
      try {
        const users = User.findAll();
  
        res.json(users);
      } catch (err) {
        console.log(err);
      }
    },
  
  
    async addUser(req, res) {
      const userData = req.body;
  
      try {
        const user = await User.create(userData);
  
        res.json({
          message: 'User successfully added',
          user: user
        });
      } catch (err) {
        console.log(err);
  
        resObj / json({
          error: 402,
          message: messages
        });
      }
    },
  
    async getUserById(req, res) {
      const user_id = req.query.user_id;
  
      try {
        const user = await User.findOne({
          where: {
            id: user_id
          }
        });
  
        if (user) {
          return res.json(user);
        }
  
        res.json({
          error: 404,
          message: 'User not found with that id'
        });
      } catch {
        console.log(err);
      }
    },
  
    async getRecipe(req, res) {
      try {
        const users = await User.findAll({
          include: Recipe
        });
  
        res.json(users);
      } catch (err) {
        console.log(err);
      }
    },
  
    async singleUserRecipe(req, res) {
  
      const user_id = req.params.user_id;
  
      try {
        const user = await User.findOne({
          where: {
            id: user_id
          },
          include: Recipe
        });
  
        res.json(user);
      } catch (err) {
        console.log('error', err);
      }
    },
  
    async deleteUser(req, res) {
      const user_id = req.params.id;
  
      try {
        await User.destroy({
          where: {
            id: user_id
          }
        });
  
        res.send({
          message: 'User deleted successfully'
        });
      } catch (err) {
        console.log(err);
      }
  
  
    },
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const router = require('express').Router();
  
  // // Route to retrieve/GET all users from the json database
  // router.get('/users', async (req, res) => {
  //   try {
  //     const users = await userController.getAllUsers();
  //     res.status(200).json(users);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // // Route to create a new user
  // router.post('/users', async (req, res) => {
  //   try {
  //     const newUser = await userController.createUser(req.body);
  //     res.status(201).json(newUser);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(400).json({ error: 'Bad Request' });
  //   }
  // });
  
  // // Route to get a single user by ID
  // router.get('/users/:id', async (req, res) => {
  //   try {
  //     const userId = req.params.id;
  //     const user = await userController.getUserById(userId);
  //     if (user) {
  //       res.status(200).json(user);
  //     } else {
  //       res.status(404).json({ message: 'User not found' });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // // Route to delete a user by ID
  // router.delete('/users/:id', async (req, res) => {
  //   try {
  //     const userId = req.params.id;
  //     const deletedUser = await userController.deleteUserById(userId);
  //     if (deletedUser) {
  //       res.status(200).json({ message: 'User deleted successfully' });
  //     } else {
  //       res.status(404).json({ message: 'User not found' });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // // Route to retrieve/GET all users with books
  // router.get('/users/books', async (req, res) => {
  //   try {
  //     const users = await userController.getAllUsersWithBooks();
  //     res.status(200).json(users);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // // Route to retrieve/GET a user with books by ID
  // router.get('/users/:id/books', async (req, res) => {
  //   try {
  //     const userId = req.params.id;
  //     const user = await userController.getUserWithBooksById(userId);
  //     if (user) {
  //       res.status(200).json(user);
  //     } else {
  //       res.status(404).json({ message: 'User not found' });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // module.exports = router;
  
  