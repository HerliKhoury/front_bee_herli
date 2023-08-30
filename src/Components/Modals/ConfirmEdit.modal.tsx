import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";

export const ConfirmEditModal = (
    props : {
        id: number,
        name: string
        proceed():void
    }
) => {
    const {flagConfirmOperation, toggleConfirmOperationFlag} = useContext(PropertyContext);

    return  (
        <Modal
            isOpen={flagConfirmOperation}
            onRequestClose={toggleConfirmOperationFlag}
            overlayClassName="modal-overlay"
            className="modal-content-maximus"
        >
            <button onClick={toggleConfirmOperationFlag}>X</button>
            <p>Tem certeza que deseja realizar a operação?</p>
            <button onClick={props.proceed}>Sim</button>
            <button onClick={toggleConfirmOperationFlag}>Não</button>
        </Modal>
    );
};