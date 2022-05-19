import express, { Request, Response } from 'express'
import { getCategories, GetWinesByCategory, GetWinesByCategoryAndSearch } from '../db/category'
import WineModel from '../db/models/wineModel';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenCategories = await getCategories();
    res.status(200).json(gottenCategories);
});

router.get('/:category', async (req: Request, res: Response) => {
    const gottenWines = await GetWinesByCategory(req.params.category);
    res.status(200).json(gottenWines);
});

//http://localhost:3000/category/Tyskland/Silva

router.get('/:category/:query', async (req: Request, res: Response) => {
    const gottenWines = await GetWinesByCategoryAndSearch(req.params.category, req.params.query);
    res.status(200).json(gottenWines);
});


// Sökfunktion kategori mot ex. /category/France/dom
// router.get('/:categoryName/:query', async (req, res) => {
//     const foundWine = await WineModel.find({ category: req.params.categoryName,
//     title: { $regex: req.params.query, $options: 'i' } 
// })
// res.status(200).json(foundWine)
// })


export default router