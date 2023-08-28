import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaRegister } from "../../Schemas/user.schemas";
import { TUser } from "../../Interfaces/user.interfaces";


export const registerUserForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(userSchemaRegister)
    });

    function onSubmitFuction(data: TUser){
        console.log(data);
    }

    return(
        <>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmitFuction)}>
                <input placeholder="Nome" {...register("name")}/>
                <p>{errors.name?.message}</p>
                <input placeholder="Email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input placeholder="Telefone" {...register("phone")}/>
                <p>{errors.phone?.message}</p>
                <input placeholder="Senha" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input placeholder="Confirme sua senha" {...register("password_confirm")}/>
                <p>{errors.password_confirm?.message}</p>
                <button type="submit">Cadastre se</button>
            </form>
            <p>Ou</p>
            <button>Login</button>
        </>
    );
};