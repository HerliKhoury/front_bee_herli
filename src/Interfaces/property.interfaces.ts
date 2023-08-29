import { InferType } from "yup";
import { propertySchema, propertySchemaOptional, propertySchemaRes } from "../Schemas/property.schemas";
import * as yup from 'yup';

export type TProperty = InferType<typeof propertySchema>;
export type TPropertyRes = InferType<typeof propertySchemaRes>
export type TPropertyUpdate = InferType<typeof propertySchemaOptional>;
export interface TFormProps { 
    validationSchema: yup.ObjectSchema<TProperty | TPropertyUpdate>;
    onSubmitFunction: (formData: any) => void;
    submitButtonText: string;
    titleText: string;
}
