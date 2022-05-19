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
    return wines;
}


export const getWinesById = async (id: string) => {
    const wine = await WineModel.findById(id);
    return wine;
}

export const pushRatingById = async (id: string, rating: number) => {
    const wine = await WineModel.findOneAndUpdate(
        { _id: id },
        { $push: { ratings: rating } },
    );
    return wine;
}