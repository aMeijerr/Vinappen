import WineModel from './models/wineModel';

// export const getCategories = async () => {
//     const categories = await WineModel.find().distinct('category');
//     return categories;
// }

export const getCategories = async () => {
    // const categories = await RecipeModel.find().distinct('category');
    // const categories = await RecipeModel.find({}, {category: 1, _id: 0})
    // const categoriesArray = categories.map(category => category.category);
    // return categoriesArray.flat();
    const categories = await WineModel.aggregate([
        { $match: {} },
        { $unwind: '$category' },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
    return categories
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