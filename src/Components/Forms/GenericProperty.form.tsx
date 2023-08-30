import { TPropertyRes } from "../../Interfaces/property.interfaces";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { propertyService } from "../../Services/property.service";
import { PropertyContext } from "../../Providers/propertyContext/property.context";

interface IProps {
    itemToEdit?: TPropertyRes
};

export const GenericPropertyForm = (props: IProps) => {

    const {toggleRegisFlag, toggleEditFlag} = useContext(PropertyContext);

    const [state, setState] = useState<TPropertyRes>({
        name: '',
        total_area: '',
        built_area: '',
        address: '',
        zip_code: '',
        price: '',
    });

    useEffect(()=> {
       if(!!props.itemToEdit)  setState(props.itemToEdit)
    },[props.itemToEdit]);
  
    async function handleSubmit(){
        try {
            if(state?.id){
                await propertyService.updateProperty(state.id, state);
                toast.success('Imóvel alterado com sucesso');
                toggleEditFlag();
            } else {
                await  propertyService.createProperty(state);
                toast.success('Imóvel criado com sucesso');
                toggleRegisFlag();
            }  
            
        } catch (error) {
            toast.error('Operação não realizada')
        }
    };

    function handleEdit(e:any) {
        setState({...state, [e.target.name]: e.target.value})
    }

    return(
        <>
            <h2 className="form-title">{!!props.itemToEdit ? 'Editar imóvel' : 'Cadastrar imóvel'}</h2>
            <div className="wrap-forms ">
                <input onChange={handleEdit} value={state.name} name="name" placeholder="Nome ou apelido"/>
                <input onChange={handleEdit} value={state.total_area} name="total_area" placeholder="Área total"/>
                <input onChange={handleEdit} value={state.built_area} name="built_area" placeholder="Área construida"/>
                <input onChange={handleEdit} value={state.address} name="address" placeholder="Endereço"/>
                <input onChange={handleEdit} value={state.zip_code} name="zip_code" placeholder="CEP"/>
                <input onChange={handleEdit} value={state.price} name="price" placeholder="Preço"/>
                <div className="btn-div">
                    <button className="form-btns" type="submit" onClick={handleSubmit}>Salvar</button>
                </div>
            </div>
        </>
    );
};