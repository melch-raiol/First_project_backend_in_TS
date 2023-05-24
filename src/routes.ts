import { Router } from "express";
const validateBodyOfRequest = require("./middlewares/validateBodyOfRequire");
const schemaCar = require("./validation/schamaCar");

import {
    updateCar,
    registerCar,
    detailCar,
    deleteCar,
    listCar
} from './controllers/cars';

const route = Router();

route.post('/carros', validateBodyOfRequest(schemaCar), registerCar);

route.put('/carros/:id', updateCar);
route.get('/carros/:id', detailCar);
route.delete('/carros/:id', deleteCar);
route.get('/carros', listCar);

export default route;