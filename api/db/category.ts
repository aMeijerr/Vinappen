import WineModel from './models/wineModel';

export const getCategories = async () => {
    const categories = await WineModel.find().distinct('category');
    return categories;
}

export const GetWinesByCategory = async (category: string) => {
    const wines = await WineModel.find({category: category});
    return wines;
}

export const GetWinesByCategoryAndSearch = async (category: string, search: string) => {
    const wines = await WineModel.find({category: category,
        $or: [
            { title: { $regex: search, $options: 'i' } }
        ]
});
    return wines;
}