import WineModel from "./models/wineModel";

export const getWines = async () => {
    const wines = await WineModel.find();
    return wines;
}


export const getWinesBySearch = async (search: string) => {
    const wines = await WineModel.find({
        $or: [
            { title: { $regex: search, $options: 'i' } }
        ]
    })
    return wines;
}


export const getWinesById = async (id: string) => {
    const wine = await WineModel.findById(id);
    return wine;
}