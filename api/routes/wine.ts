import express, {Request, Response} from 'express';
import { getWines, getWinesById } from '../db/wine';
import WineModel from '../db/models/wineModel';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenWines = await getWines();
    res.status(200).json(gottenWines);
});

router.get('/:wineId', async (req: Request, res: Response) => {
    const gottenWine = await getWinesById(req.params.wineId);
    res.status(200).json(gottenWine);
});

//Search title as ex. /wines/cert 
router.get('/:query', async (req, res) => {
    const foundWine = await WineModel.find({
        title: { $regex: req.params.query, $options: 'i' } 
    })
    res.status(200).json(foundWine)
});


export default router