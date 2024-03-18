import "./DeleteWarehouse.scss";
import Modal from "react-modal";
import closeIcon from "../../assets/icons/close-24px.svg";
import { InStockApi } from "../../utils/Util.js";

Modal.setAppElement('#root');

const DeleteWarehouse = ({ isOpen, onRequestClose, warehouseToDelete }) => {
    const stockApi = new InStockApi();

    function handleClose() {
        onRequestClose("false");
    }
  
    function confirmCancel() {
        onRequestClose("false");
    }
  
    /**
     * Added to delete warehouse from backendAPI using Axios call  
     * @param {*} warehouseToDelete 
     */
    async function confirmDelete(warehouseToDelete) {        
        const response = await stockApi.deleteWarehouse(warehouseToDelete.id);
        //Successful deletion : control back to Parent Page
        if(response.status===204) { 
            onRequestClose("false");
        }
    }

    return (
        <Modal className="modal-component" isOpen={isOpen} onRequestClose={onRequestClose}>

            <section className="delete">
                <img className="delete__close-icon" src={closeIcon} alt="Close" onClick={handleClose} />

                <div className="delete__text-container">
                    <h1 className="delete__title">Delete {warehouseToDelete.name} warehouse? </h1>
                    <p className="delete__subtitle">
                        Please confirm that you’d like to delete {warehouseToDelete.name} from the the list of warehouses.
                        You won’t be able to undo this action.
                    </p>
                </div>

                <div className="delete__button-container">
                    <button className="delete__cancel" onClick={confirmCancel} >Cancel</button>
                    <button className="delete__delete" onClick={() => confirmDelete(warehouseToDelete)} > Delete </button>
                </div>
            </section>
        </Modal>
    );
};

export default DeleteWarehouse;