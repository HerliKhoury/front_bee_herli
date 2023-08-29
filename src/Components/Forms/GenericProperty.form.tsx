import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TFormProps } from "../../Interfaces/property.interfaces";

export const GenericPropertyForm: React.FC<TFormProps> = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(props.validationSchema)
    });

    return(
        <>
            <h2 className="form-title">{props.titleText}</h2>
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
                <div className="btn-div">
                    <button className="form-btns" type="submit">{props.submitButtonText}</button>
                    <button className="form-btns" type="button" onClick={props.cancelFunction}>Cancelar</button>
                </div>
            </form>
            
        </>
    );
};