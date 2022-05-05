import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';


import wineRouter from './routes/wine';
import categoryRouter from './routes/category';

connect('mongodb://localhost:27017/WineApp')

const app = express()
app.use(cors())
app.use(json());
const port = 3000


app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') })

app.listen(port, () => {
console.log (`Example app listening on port ${port}`)
})

app.use('/wines', wineRouter)
app.use('/category', categoryRouter)