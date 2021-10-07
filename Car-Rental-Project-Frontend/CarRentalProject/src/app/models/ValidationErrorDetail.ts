import { ErrorDetails } from "./ErrorDetails";
import { ValidationError } from "./ValidationError";

export interface ValidationErrorDetails extends ErrorDetails{
    validationErrors:ValidationError[];
}