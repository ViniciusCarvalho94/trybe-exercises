const express = require('express');

const getAllPatientsWithPlanController = require('../controller/getAllPatientsWithPlanController');
const getAllPatientsWithSurgeriesController = require('../controller/getAllPatientsWithSurgeriesController');
const getPlanByIdAndYoursPatientsController =require('../controller/getPlanByIdAndYoursPatientsController')

const routes = express.Router();

routes.get('/plan', getAllPatientsWithPlanController);
routes.get('/plan/:id', getPlanByIdAndYoursPatientsController)
routes.get('/surgeries', getAllPatientsWithSurgeriesController)

module.exports = routes;