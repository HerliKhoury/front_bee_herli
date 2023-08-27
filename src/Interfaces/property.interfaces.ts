import { InferType } from "yup";
import { propertySchema, propertySchemaOptional } from "../Schemas/property.schemas";
import * as yup from 'yup';

export type TProperty = InferType<typeof propertySchema>;
export type TPropertyUpdate = InferType<typeof propertySchemaOptional>;

export interface TFormProps { 
    validationSchema: yup.ObjectSchema<TProperty | TPropertyUpdate>;
    onSubmitFunction: /* ( propertyData: TProperty | TPropertyUpdate ) =>  Response */ () => void;
    submitButtonText: string;
    titleText: string;
}