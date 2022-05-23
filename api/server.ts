import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';
import WineModel from './db/models/wineModel';
import dotenv from "dotenv"

dotenv.config();


import wineRouter from './routes/wine';
import categoryRouter from './routes/category';

// if(process.env.MONGO_DB_CONNECTION_STRING){
//     connect(process.env.MONGO_DB_CONNECTION_STRING)
// }else{
//     console.log("MONGO config is not set")
// }

if (process.env.MONGO_DB_CONNECTION_STRING) {
    connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => console.log('listening to port: ' + port));
    })
} else {
    console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
}

// connect('mongodb://localhost:27017/WineApp')
// connect('mongodb+srv://alex:OvCLjZ3cCo0VEmEc@wineapp.wisl0.mongodb.net/WineApp').then(() => {
//     console.log('Connected to MongoDB')
//     app.listen(port, () => {
//     console.log (`Listening on port ${port}`)
//     });
// })

const app = express();
app.use(cors());
app.use(json());

app.use('/wines', wineRouter);
app.use('/category', categoryRouter);

const port = process.env.PORT || 3000

app.use(express.static('public')); 
app.use('/images', express.static('images'));

//PeterMan

app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') });

// app.get('/wines', (req, res, next) => {
//     res.send(req.query)
//   })


// app.listen(port, () => {
// console.log (`Example app listening on port ${port}`)
// });