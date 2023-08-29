import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";

export const ConfirmDeleteModal = (
    props : {
        id: number,
        name: string
    }
) => {
    const {flagConfirmDelete, toggleConfirmDeleteFlag} = useContext(PropertyContext);

    return  (
        <Modal
            isOpen={flagConfirmDelete}
            onRequestClose={toggleConfirmDeleteFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button onClick={toggleConfirmDeleteFlag}>X</button>
            <p>Tem certeza que deseja deletar o imóvel {props.name} ?</p>
            <button /* onClick={} */>Sim</button>
            <button onClick={toggleConfirmDeleteFlag}>Não</button>
        </Modal>
    );
};