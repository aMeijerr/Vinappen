import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';
import WineModel from './db/models/wineModel';


import wineRouter from './routes/wine';
import categoryRouter from './routes/category';

connect('mongodb://localhost:27017/WineApp')
// connect('mongodb+srv://alex:165845952@wineapp.wisl0.mongodb.net/wineapp?retryWrites=true&w=majority').then(() => {
//     console.log('Connected to MongoDB')
//     app.listen(port, () => {
//     console.log (`Listening on port ${port}`)
//     });
// })

const app = express()
app.use(cors())
app.use(json());
const port = 3000
app.use(express.static('public')); 
app.use('/images', express.static('images'));



app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') })

// app.get('/wines', (req, res, next) => {
//     res.send(req.query)
//   })


app.listen(port, () => {
console.log (`Example app listening on port ${port}`)
})

app.use('/wines', wineRouter)
app.use('/category', categoryRouter)