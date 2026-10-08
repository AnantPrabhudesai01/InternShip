import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors()); 
app.use(express.json());
let samples = [];

app.get('/samples',(req,res)=>res.json(samples));
app.post('/samples',(req,res)=>{
    samples.push(req.body);
    res.json(req.body);
});
app.listen(5000,()=> console.log('Server started on port 5000'));
