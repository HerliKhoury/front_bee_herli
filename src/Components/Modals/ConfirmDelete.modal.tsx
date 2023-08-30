import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";
import { propertyService } from "../../Services/property.service";
import { toast } from "react-toastify";

export const ConfirmDeleteModal = (
    props : {
        id: number,
        name: string
    }
) => {
    const {flagConfirmDelete, toggleConfirmDeleteFlag} = useContext(PropertyContext);
    async function handleDelete() {
        toggleConfirmDeleteFlag()
        propertyService.deleteProperty(props.id)
        toast.success('Anúncio deletado')
    }
    return  (
        <Modal
            isOpen={flagConfirmDelete}
            onRequestClose={toggleConfirmDeleteFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button onClick={toggleConfirmDeleteFlag}>X</button>
            <p>Tem certeza que deseja deletar o imóvel ?</p>
            <button onClick={handleDelete}>Sim</button>
            <button onClick={toggleConfirmDeleteFlag}>Não</button>
        </Modal>
    );
};