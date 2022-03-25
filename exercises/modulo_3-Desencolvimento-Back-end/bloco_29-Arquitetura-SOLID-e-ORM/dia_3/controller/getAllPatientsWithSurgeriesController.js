const { Patient, Surgery } = require('../models')

module.exports = async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { 
        model: Surgery, as: 'surgery', 
        through: { attributes: [] }
      }
    })

    return res.status(200).json(patients)
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
