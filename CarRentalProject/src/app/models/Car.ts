import { CarImage } from "./carImage";

export interface Car{
    carID: number;
    brandID:number;
    brandName: string;
    colorID:number;
    colorName: string;
    modelYear:string;
    carImage:CarImage[]
    dailyPrice: number;
    description: string;
    
}