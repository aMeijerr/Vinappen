import express, {Request, Response, json} from 'express';
import { connect } from 'mongoose'
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();

import wineRouter from './routes/wine';
import categoryRouter from './routes/category';

if (process.env.MONGO_DB_CONNECTION_STRING) {
    connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => console.log('listening to port: ' + port));
    })
} else {
    console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
}

const app = express();
app.use(cors());
app.use(json());

app.use('/wines', wineRouter);
app.use('/category', categoryRouter);

const port = process.env.PORT || 3000

app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.get('/', (req: Request, res: Response) => {
res.send ('Hello World!') });