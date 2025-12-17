const users = require("../data/users");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  users.push({
    id: users.length + 1,
    name,
    email,
    password: hashed,
    role // "admin" atau "mahasiswa"
  });

  res.json({ message: "Register berhasil" });
};

const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ message: "User tidak ditemukan" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Password salah" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};
