import {Router} from 'express';
import {registerSchema,loginSchema} from '../validations/auth.js';

export const authRouter = Router();

authRouter.post('/register', async (req,res) =>{
    const parsed = registerSchema.safeParse(req.body);
    if(!parsed.success){
        return res.status(400).json({error:parsed.error.issues })
    }
})

authRouter.post('/login', async (req,res) =>{
    const parsed = loginSchema.safeParse(req.body);
    if(!parsed.success){
        return res.status(400).json({error:parsed.error.issues })
    }
})