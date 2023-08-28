import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../../Providers/propertyContext/property.context";
import "./modal.style.css";
import { EditPropertyForm } from "../Forms/EditProperty.form";

export const EditPropertyModal = () => {
    const {flagEditForm, toggleEditFlag} = useContext(PropertyContext);

    return  (
        <Modal
            isOpen={flagEditForm}
            onRequestClose={toggleEditFlag}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <button onClick={toggleEditFlag}>X</button>
            <EditPropertyForm/>
            <button onClick={toggleEditFlag}>Close</button>
        </Modal>
    );
};