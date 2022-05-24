import express, {Request, Response} from 'express';
import { getWines, getWinesById, getWinesBySearch, pushRatingById } from '../db/wine';
import WineModel from '../db/models/wineModel';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    // console.log(req.protocol + "://" + req.get('host'))
    const gottenWines = await getWines();
    res.status(200).json(gottenWines);
});

router.get('/:wineId', async (req: Request, res: Response) => {
    const gottenWine = await getWinesById(req.params.wineId);
    res.status(200).json(gottenWine);
});


router.get('/search/:query', async (req: Request, res: Response) => {
    const gottenWines = await getWinesBySearch(req.params.query);
    res.status(200).json(gottenWines);
});

router.post('/:wineId', async (req: Request, res: Response) => {
    const updatedWine = await pushRatingById(req.params.wineId, req.body.rating);
    res.status(201).json(updatedWine);
});


export default router