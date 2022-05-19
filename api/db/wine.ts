import WineModel from "./models/wineModel";

export const getWines = async () => {
    const wines = await WineModel.find();
    return wines;
}


export const getWinesBySearch = async (search: any) => {
    const wines = await WineModel.find({
        $or: [
            { title: { $regex: search, $options: 'i' } }
        ]
    })
    console.log(search)
    return wines;
}


export const getWinesById = async (id: string) => {
    const wine = await WineModel.findById(id);
    return wine;
}