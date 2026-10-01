import {z} from 'zod';  

export const registerSchema =(
{
     email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
}
)


export const loginSchema =(
{
    email: z.string().email(),
    password: z.string().min(8)
}
)