import express, { Request, Response } from 'express'
import { getCategories, GetWinesByCategory, GetWinesByCategoryAndSearch } from '../db/category'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenCategories = await getCategories();
    res.status(200).json(gottenCategories);
});

router.get('/:category', async (req: Request, res: Response) => {
    const gottenWines = await GetWinesByCategory(req.params.category);
    res.status(200).json(gottenWines);
});


router.get('/:category/:query', async (req: Request, res: Response) => {
    const gottenWines = await GetWinesByCategoryAndSearch(req.params.category, req.params.query);
    res.status(200).json(gottenWines);
});

export default router