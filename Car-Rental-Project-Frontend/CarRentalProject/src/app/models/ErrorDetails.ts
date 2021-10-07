
import { ValidationError } from "./ValidationError";

export interface ErrorDetails{
    StatusCode:number
    Message:string
    ValidationErrors:ValidationError[]
}