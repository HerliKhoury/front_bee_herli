import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TFormProps, TProperty, TPropertyUpdate} from "../../Interfaces/property.interfaces";
import { useContext } from "react";
import { UserContext } from "../../Providers/userContext/user.context";
import { PropertyContext } from "../../Providers/propertyContext/property.context";



export const GenericPropertyForm: React.FC<TFormProps> = (props) => {


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(props.validationSchema)
    });


    return(
        <>
            <h2>{props.titleText}</h2>
            <form onSubmit={handleSubmit(props.onSubmitFunction)}>
                <input placeholder="Nome ou apelido" {...register("name")}/>
                <p>{errors.name?.message}</p>
                <input placeholder="Área total" {...register("total_area")}/>
                <p>{errors.total_area?.message}</p>
                <input placeholder="Área construida" {...register("built_area")}/>
                <p>{errors.built_area?.message}</p>
                <input placeholder="Endereço" {...register("address")}/>
                <p>{errors.address?.message}</p>
                <input placeholder="CEP" {...register("zip_code")}/>
                <p>{errors.zip_code?.message}</p>
                <input placeholder="Preço" {...register("price")}/>
                <p>{errors.price?.message}</p>
                <button type="submit">{props.submitButtonText}</button>
            </form>
            <button type="button">Cancelar</button>
        </>
    );
};