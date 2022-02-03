'use strict';

module.exports = (sequelize, _DataTypes) => {
  const PatientSurgeries = sequelize.define('Patient_surgeries',
    {},
    { timestamps: false }
  );

  PatientSurgeries.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgery',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id'
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patient',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id'
    })
  }

  return PatientSurgeries
};