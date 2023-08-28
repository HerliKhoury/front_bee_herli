import { InferType } from "yup";
import { loginSchema, responseLoginSchema } from "../Schemas/login.schemas";

export type TLogin = InferType<typeof loginSchema>;
export type TLoginRes = InferType<typeof responseLoginSchema>;