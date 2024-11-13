const Institution = require('../models/Institution');
const Specialty = require('../models/Specialty');

exports.createInstitution = async (req, res) => {
  try {
    const institution = await Institution.create(req.body);
    res.json(institution);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInstitution = async (req, res) => {
  try {
    const institution = await Institution.findAll();
    res.json(institution);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInstitutionBySpecialityId  = async (req, res) => {
  const {id: specialtyId} = req.params; 
  console.log(specialtyId);
  try {
    // Busca todas las instituciones con el specialtyId especificado
    const institutions = await Institution.findAll({
      where: { specialtyId },
      include: {
        model: Specialty,
        attributes: ['Type'], // Puedes incluir los atributos de Specialty que necesites
      },
    });
    
    // Verifica si se encontraron instituciones
    if (institutions.length === 0) {
      return res.status(404).json({ message: 'No se encontraron instituciones para el specialtyId especificado' });
    }
    
    // Devuelve las instituciones encontradas
    res.status(200).json(institutions);
  } catch (error) {
    console.error('Error al obtener instituciones:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
