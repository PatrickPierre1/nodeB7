import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
});

export default router;

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página de sobre');
});

