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
            <button onClick={toggleConfirmOperationFlag} className="close-btn">X</button>
            <p className="confirm-msg">Tem certeza que deseja atualizar o imóvel?</p>
            <div className="btn-div-modal">
                <button onClick={props.proceed} className="form-btns">Sim</button>
                <button onClick={toggleConfirmOperationFlag} className="form-btns">Não</button>
            </div>
        </Modal>
    );
};