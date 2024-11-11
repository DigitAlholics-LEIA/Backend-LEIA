const Curso = require('../models/curso');

exports.createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

