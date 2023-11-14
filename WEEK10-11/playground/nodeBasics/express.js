const express = require("express");
const app = express();
const uuid = require("uuid");

// Initial "database"
const users = [];

// Parse responses

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all users

app.get("/api/users", (req, res) => res.json(users));

// Get single user

app.get("/api/users/:id", (req, res) => {
  const memberExists = users.some((user) => {
    return user.id === req.params.id;
  });

  if (memberExists) {
    const singleUser = users.filter((user) => {
      return user.id === req.params.id;
    });
    res.json(singleUser);
  } else {
    res.status(400).json({ message: "User not found" });
  }
});

// Create new user

app.post("/api/users", (req, res) => {
  const { username, firstName, lastName, age, isAdmin } = req.body;

  if (!username || !firstName || !lastName || !age || !isAdmin) {
    res.send(400, { message: "All field are required" });
  } else {
    const newUser = {
      id: uuid.v4(),
      username,
      firstName,
      lastName,
      age,
      isAdmin,
    };

    users.push(newUser);
    res.json(newUser);
  }
});

// Start server

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
