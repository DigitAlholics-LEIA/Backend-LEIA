const Specialty = require('../models/Specialty');

exports.createSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.create(req.body);
    res.json(specialty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSpecialty = async (req, res) => {
  try {
    const specialty = await Specialty.findAll();
    res.json(specialty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
