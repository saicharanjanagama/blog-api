const jwt = require("jsonwebtoken");

// Dummy user (no DB)
const USER = {
  email: "admin@example.com",
  password: "admin123",
};

exports.register = (req, res) => {
  const { email } = req.body;

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({ message: "User registered", token });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email !== USER.email || password !== USER.password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};
