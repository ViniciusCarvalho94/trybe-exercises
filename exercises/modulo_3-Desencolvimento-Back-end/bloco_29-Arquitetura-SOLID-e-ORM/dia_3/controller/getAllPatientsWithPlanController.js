const { Patient, Plan } = require('../models')

module.exports = async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      attributes: { exclude: ['plan_id'] },
      include: { model: Plan, as: 'plan' }
    })

    return res.status(200).json(patients)
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
