import { CarDetail } from "./car-detail";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:CarDetail[],
    
}