import "./DeleteWarehouse.scss";
import closeIcon from "../../assets/icons/close-24px.svg";


function DeleteWarehouse() {

    return (
        <>
            <section className="delete">
                <img className="delete__close-icon" src={closeIcon} alt="Close" />

                <div className="delete__text-container">
                    <h1 className="delete__text-container-title">Delete Washington warehouse?</h1>
                    <p className="delete__text-container-subtitle">
                        Please confirm that you’d like to delete the Washington from the list of warehouses.
                        You won’t be able to undo this action.
                    </p>
                </div>

                <div className="delete__button-container">
                    <button className="delete__button-container-cancel">Cancel</button>
                    <button onClick className="delete__button-container-delete"> Delete </button>
                </div>
            </section>
        </>
    );

};

export default DeleteWarehouse;