const { Plan, Patient } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findOne({
      where: { plan_id: id },
      include: [{ 
        model: Patient, 
        as: 'patients', 
        attributes : { exclude: ['plan_id']}
      }]
    });
    
    return res.status(200).json(plan)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
}