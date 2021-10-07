import { Brand } from "./Brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModel extends ResponseModel{
    data:Brand[];
}