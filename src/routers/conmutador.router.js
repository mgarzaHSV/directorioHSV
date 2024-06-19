import express from 'express';
import { mainPage } from '../controllers/conmutador.controller.js';
const routerConmutador = express.Router();

routerConmutador.get('/', mainPage);

export default routerConmutador ;