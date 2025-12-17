module.exports = (req, res, next) => {
  const { title, date } = req.body;
  if (!title || !date) {
    return res.status(400).json({ message: "Data kegiatan tidak lengkap" });
  }
  next();
};
