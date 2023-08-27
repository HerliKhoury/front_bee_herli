import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Schemas/login.schemas";
import { TLogin } from "../../Interfaces/login.interfaces";


export const loginForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    });

    function onSubmitFuction(data: TLogin){
        console.log(data);
    }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmitFuction)}>
                <input placeholder="Email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input placeholder="Senha" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <button type="submit">Login</button>
            </form>
        </>
    );
};