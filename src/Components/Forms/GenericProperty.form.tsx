import { TPropertyRes } from "../../Interfaces/property.interfaces";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { propertyService } from "../../Services/property.service";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import {  propertySchemaRes } from "../../Schemas/property.schemas";
import * as Yup from 'yup';
interface IProps {
    itemToEdit?: TPropertyRes
};

export const GenericPropertyForm = (props: IProps) => {

    const { toggleEditFlag } = useContext(PropertyContext);

    const [state, setState] = useState<TPropertyRes>({
        name: '',
        total_area: '',
        built_area: '',
        address: '',
        zip_code: '',
        price: '',
    });

    const [stateErrors, setStateErrors] = useState({
        name: {
            status: false,
            message: ''
        },
        total_area: {
            status: false,
            message: ''
        },
        built_area: {
            status: false,
            message: ''
        },
        address: {
            status: false,
            message: ''
        },
        zip_code: {
            status: false,
            message: ''
        },
        price: {
            status: false,
            message: ''
        },
    });

    useEffect(() => {
        if (!!props.itemToEdit) setState(props.itemToEdit);
    }, [props.itemToEdit]);

    function handleErrors(err: any) {
        let stateErrorscopy = JSON.parse(JSON.stringify(stateErrors))
        for(let error of err.inner) {
            console.log('oi', error)
            for (let key in stateErrors) {
                if (error.path === key) {
                    stateErrorscopy[key as keyof typeof stateErrors] = {
                        status: true,
                        message: error.message
                    }};
                };
            };
            
            setStateErrors(stateErrorscopy)
    }

    async function handleSubmit() {
        try {
            if (state?.id) {

                await propertyService.updateProperty(state.id, state);
                toast.success('Imóvel alterado com sucesso');
                toggleEditFlag();
            } else {
                await propertySchemaRes.validate(state, { abortEarly: false });
                await propertyService.createProperty(state);
                toast.success('Imóvel criado com sucesso');
            }
        } catch (err: any) {
            if (err instanceof Yup.ValidationError) {
              handleErrors(err);
            }
        }
    };

    function handleEdit(e: any) {
        setState({ ...state, [e.target.name]: e.target.value })
        setStateErrors({...stateErrors, [e.target.name]: {status: false, message: ""}})
    }

    return (
        <>
            <h2 className="form-title">{!!props.itemToEdit ? 'Editar imóvel' : 'Cadastrar imóvel'}</h2>
            <div className="wrap-forms ">
                <input onChange={handleEdit} value={state.name} name="name" placeholder="Nome ou apelido" />
                {stateErrors.name.status && <span className="span-error">{stateErrors.name.message}</span>}

                <input onChange={handleEdit} value={state.total_area} name="total_area" placeholder="Área total" />
                {stateErrors.total_area.status && <span className="span-error">{stateErrors.total_area.message}</span>}

                <input onChange={handleEdit} value={state.built_area} name="built_area" placeholder="Área construida" />
                {stateErrors.built_area.status && <span className="span-error">{stateErrors.built_area.message}</span>}

                <input onChange={handleEdit} value={state.address} name="address" placeholder="Endereço" />
                {stateErrors.address.status && <span className="span-error">{stateErrors.address.message}</span>}

                <input onChange={handleEdit} value={state.zip_code} name="zip_code" placeholder="CEP" />
                {stateErrors.zip_code.status && <span className="span-error">{stateErrors.zip_code.message}</span>}

                <input onChange={handleEdit} value={state.price} name="price" placeholder="Preço" />
                <span className="span-error">{stateErrors.price.message}</span>
                
                <div className="btn-div">
                    <button className="form-btns" type="submit" onClick={handleSubmit}>Salvar</button>
                </div>
            </div>
        </>
    );
};