const History = require('../models/history');
const Institution = require('../models/Institution');

exports.createHistory = async (req, res) => {
  try {
    const history = await History.create(req.body);
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await History.findAll();
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getHistoryByInstitutionId  = async (req, res) => {
  const {id: institutionId} = req.params; 
  console.log(institutionId);
  try {
    // Busca todas las instituciones con el specialtyId especificado
    const history = await History.findAll({
      where: { institutionId },
      include: {
        model: Institution,
        attributes: ['Name'], // Puedes incluir los atributos de Specialty que necesites
      },
    });
    
    // Verifica si se encontraron instituciones
    if (history.length === 0) {
      return res.status(404).json({ message: 'No se encontraron instituciones para el specialtyId especificado' });
    }
    
    // Devuelve las instituciones encontradas
    res.status(200).json(history);
  } catch (error) {
    console.error('Error al obtener instituciones:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};