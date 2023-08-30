import { TPropertyRes } from "../../Interfaces/property.interfaces";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { propertyService } from "../../Services/property.service";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { propertySchema, propertySchemaOptional, propertySchemaRes } from "../../Schemas/property.schemas";
import * as Yup from 'yup';
import { ConfirmEditModal } from "../Modals/ConfirmEdit.modal";
interface IProps {
    itemToEdit?: TPropertyRes
};

export const GenericPropertyForm = (props: IProps) => {

    const {toggleRegisFlag, toggleEditFlag, toggleConfirmOperationFlag} = useContext(PropertyContext);

    const [state, setState] = useState<TPropertyRes>({
        name: '',
        total_area: '',
        built_area: '',
        address: '',
        zip_code: '',
        price: '',
    });
    const [stateErrors, setStateErrors] = useState({ //TPropertyResErrors
        name: {
            status: false,
            message:''
        },
        total_area: {
            status: false,
            message:''
        },
        built_area: {
            status: false,
            message:''
        },
        address: {
            status: false,
            message:''
        },
        zip_code: {
            status: false,
            message:''
        },
        price: {
            status: false,
            message:''
        },
    });
    function askConfirmation() {
     toggleConfirmOperationFlag()   
    }
    useEffect(()=> {
       if(!!props.itemToEdit)  setState(props.itemToEdit)
    },[props.itemToEdit]);
    async function proceed() {
        toggleConfirmOperationFlag()
        await handleSubmit()
    }
    async function handleSubmit(){
        try {
            if(state?.id){
               
                await propertyService.updateProperty(state.id, state);
                toast.success('Imóvel alterado com sucesso');
                toggleEditFlag();
            } else {
            //   await propertySchemaRes.validate(state, {abortEarly: false})
                /* const {formState: {errors}} = useForm({
                    resolver: yupResolver(propertySchema)
                }) */;
                await  propertyService.createProperty(state);
                toast.success('Imóvel criado com sucesso');
                toggleRegisFlag();
            }  
            
        } catch (err: any) {
            
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    let stateErrorscopy = stateErrors
                   for(let key in stateErrors) {
                //     if(error.value === key) {
                //      stateErrorscopy[key] = {
                //         status: true,
                //         message: error.message
                //      }
                //     }
                   }

                  });
                Object.values(err).map((error) => {
                    console.log(error)
                  });
                // setHasErrors(true);
              }
        }
    };

    function handleEdit(e:any) {
        setState({...state, [e.target.name]: e.target.value})
    }

    return(
        <>
        <ConfirmEditModal id={0} name={""} proceed={proceed}/>
            <h2 className="form-title">{!!props.itemToEdit ? 'Editar imóvel' : 'Cadastrar imóvel'}</h2>
            <div className="wrap-forms ">
                <input onChange={handleEdit} value={state.name} name="name" placeholder="Nome ou apelido"/>
                <input onChange={handleEdit} value={state.total_area} name="total_area" placeholder="Área total"/>
                <input onChange={handleEdit} value={state.built_area} name="built_area" placeholder="Área construida"/>
                <input onChange={handleEdit} value={state.address} name="address" placeholder="Endereço"/>
                <input onChange={handleEdit} value={state.zip_code} name="zip_code" placeholder="CEP"/>
                <input onChange={handleEdit} value={state.price} name="price" placeholder="Preço"/>
                <div className="btn-div">
                    <button className="form-btns" type="submit" onClick={askConfirmation}>Salvar</button>
                </div>
            </div>
        </>
    );
};