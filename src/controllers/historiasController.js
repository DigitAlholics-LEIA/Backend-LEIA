const Historia = require('../models/historia');

exports.createHistoria = async (req, res) => {
  try {
    const historia = await Historia.create(req.body);
    res.json(historia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHistorias = async (req, res) => {
  try {
    const historias = await Historia.findAll();
    res.json(historias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


