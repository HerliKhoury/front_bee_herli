import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaRegister } from "../../Schemas/user.schemas";
import { TUser } from "../../Interfaces/user.interfaces";
import { useContext } from "react";
import { UserContext } from "../../Providers/userContext/user.context";


export const RegisterUserForm = () => {
    const {
        toggleForm, 
        setToggleForm,
        createUser
    } = useContext(UserContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(userSchemaRegister)
    });

    function onSubmitFuction(data: TUser){
        createUser(data);
    }

    return(
        <div className="wrap-forms">
            <h2 className="form-title">Cadastro</h2>
            <form onSubmit={handleSubmit(onSubmitFuction)}>
                <input placeholder="Nome" {...register("name")}/>
                <p className="errors">{errors.name?.message}</p>
                <input placeholder="Email" {...register("email")}/>
                <p className="errors">{errors.email?.message}</p>
                <input placeholder="Telefone" {...register("phone")}/>
                <p className="errors">{errors.phone?.message}</p>
                <input placeholder="Senha" {...register("password")}/>
                <p className="errors">{errors.password?.message}</p>
                <input placeholder="Confirme sua senha" {...register("password_confirm")}/>
                <p className="errors">{errors.password_confirm?.message}</p>
                <button type="submit" className="form-btns">Cadastre se</button>
            </form>
            <p className="or">Ou</p>
            <button className="form-btns" onClick={() => {setToggleForm(!toggleForm)}}>Login</button>
        </div>
    );
};