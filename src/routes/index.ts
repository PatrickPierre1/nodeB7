import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoControler from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home); 

router.get('/contato', InfoControler.contato);
router.get('/sobre', InfoControler.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade', UserController.idadeAction);  

export default router;