import { Schema, model } from 'mongoose';

interface Grapes {
    grapes: string,
    bottlesProduced: number,
    unitSize: number
}

export interface WineType {
    title: string,
    description: string,
    imageUrl: string,
    storeInYears: number,
    ratings: [number],
    category: [string],
    grapes: [Grapes],
    process: [string]
}


const schema = new Schema<WineType>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    storeInYears: { type: Number, required: true },
    ratings: { type: [Number], required: true },
    category: { type: [String], required: true },
    grapes: { type: [Object], required: true },
    process: { type: [String], required: true }
})

const WineModel = model<WineType>('wine', schema);

export default WineModel

