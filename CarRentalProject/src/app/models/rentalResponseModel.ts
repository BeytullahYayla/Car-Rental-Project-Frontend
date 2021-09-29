import { RentalDetail } from "./Rental-Detail";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:RentalDetail[]
}