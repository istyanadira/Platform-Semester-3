const activities = require("../data/activities");

exports.getAll = (req, res) => {
  res.json(activities);
};

exports.create = (req, res) => {
  activities.push({
    id: activities.length + 1,
    ...req.body,
    participants: []
  });
  res.json({ message: "Kegiatan dibuat" });
};

exports.update = (req, res) => {
  const activity = activities.find(a => a.id == req.params.id);
  if (!activity) return res.status(404).json({ message: "Tidak ditemukan" });

  Object.assign(activity, req.body);
  res.json({ message: "Kegiatan diupdate" });
};

exports.join = (req, res) => {
  const activity = activities.find(a => a.id == req.params.id);
  if (!activity) return res.status(404).json({ message: "Tidak ditemukan" });

  activity.participants.push(req.user.id);
  res.json({ message: "Berhasil join kegiatan" });
};
