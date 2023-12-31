import { InferType } from "yup";
import { userSchemaRegister, userSchemaReq } from "../Schemas/user.schemas";

export type TUser = InferType<typeof userSchemaRegister>;
export type TUserReq = InferType<typeof userSchemaReq>;
export type TUserInfo = {
    token: string,
    name: string,
    email: string
}
export type TUserInfoState = {
    name: string,
    email: string
}