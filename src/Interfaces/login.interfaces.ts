import { InferType } from "yup";
import { loginSchema } from "../Schemas/login.schemas";

export type TLogin = InferType<typeof loginSchema>;