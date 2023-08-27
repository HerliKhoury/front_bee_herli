import { InferType } from "yup";
import { userSchemaRegister } from "../Schemas/user.schemas";

export type TUser = InferType<typeof userSchemaRegister>;