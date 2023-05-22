import { Router } from "express";
import {
    updateCar,
    registerCar,
    detailCar,
    deleteCar,
    listCar
} from './controllers/cars';

const route = Router();

route.put('/carros/:id', updateCar);
route.post('/carros', registerCar);
route.get('/carros/:id', detailCar);
route.delete('/carros/:id', deleteCar);
route.get('/carros', listCar);

export default route;