import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req, res)=>{
    return res.json({ok: true})
    //throw new Error('Erro ao fazer requisição')

})

export {router};
//;: