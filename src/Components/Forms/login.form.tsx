import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../Schemas/login.schemas";
import { TLogin } from "../../Interfaces/login.interfaces";
import { useContext } from "react";
import { UserContext } from "../../Providers/userContext/user.context";


export const LoginForm = () => {
    const {
        toggleForm, 
        setToggleForm,
        userLogin
    } = useContext(UserContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema)
    });

    function onSubmitFuction(data: TLogin){
        userLogin(data);
    }

    return(
        <div className="wrap-forms">
            <h2 className="form-title">Login</h2>
            <form onSubmit={handleSubmit(onSubmitFuction)}>
                <input placeholder="Email" {...register("email")}/>
                <p className="errors">{errors.email?.message}</p>
                <input placeholder="Senha" {...register("password")}/>
                <p className="errors">{errors.password?.message}</p>
                <button className="form-btns" type="submit">Login</button>
            </form>
            <p className="or">Ou</p>
            <button 
            className="form-btns" 
            onClick={() => {setToggleForm(!toggleForm)}}
            >Registre se</button>
        </div>
    );
};