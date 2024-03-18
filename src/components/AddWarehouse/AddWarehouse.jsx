import { useNavigate } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import "../AddWarehouse/AddWarehouse.scss"
import { InStockApi } from "../../utils/Util";

function AddWarehouse (){

    const navigate  = useNavigate();
    const api = new InStockApi();

    function handleBack() {
        navigate(-1);
      }

    function handleFormSubmit (event){
        event.preventDefault();
        const action = event.target.action.value;
        if (action === "cancel") {
          navigate(-1);
          return;
        }
        const newWarehouse = {
            warehouse_name: event.target.WarehouseName.value,
            address: event.target.StreetAddress.value,
            city: event.target.City.value,
            country: event.target.Country.value,
            contact_name: event.target.ContactName.value,
            contact_position: event.target.Position.value,
            contact_phone: event.target.PhoneNumber.value,
            contact_email: event.target.Email.value
        }
        console.log(newWarehouse)
        async function addWarehouse (newWarehouse){
            await api.addWarehouse(newWarehouse);
        };
        addWarehouse(newWarehouse);
        navigate("/warehouse");
        alert("New Warehouse successfully Added!");
    }

    return (
        <section className="addWarehouse">
            <div className="EditWarehouse__title--section">
                <img className="EditWarehouse__arrowBack" src={arrowBack} alt="arrowBack" onClick={handleBack}/>
                <h1 className="EditWarehouse__title">Add New Warehouse</h1>
            </div>
            <hr className="addWarehouse__hr" />
            <form onSubmit={handleFormSubmit} className="addWarehouse__form" name="addWarehouse__form">
                <div className="addWarehouse__text">
                    <section className="addWarehouse__details--warehouse">
                        <h2 className="addWarehouse__subtitle">Warehouse Details</h2>
                        <p className="addWarehouse__label">Warehouse Name</p>
                        <input type="text" name="WarehouseName" className="addWarehouse__input" placeholder="Warehouse Name" required/>
                        <p className="addWarehouse__label">Street Address</p>
                        <input type="text" name="StreetAddress" className="addWarehouse__input" placeholder="Street Address" required/>
                        <p className="addWarehouse__label">City</p>
                        <input type="text" name="City" className="addWarehouse__input" placeholder="City" required/>
                        <p className="addWarehouse__label">Country</p>
                        <input type="text" name="Country" className="addWarehouse__input" placeholder="Country" required/>
                    </section>
                    <hr className="addWarehouse__hr2" />
                    <section className="addWarehouse__details--contact">
                        <h2 className="addWarehouse__subtitle">Contact Details</h2>
                        <p className="addWarehouse__label">Contact Name</p>
                        <input type="text" name="ContactName" className="addWarehouse__input" placeholder="Contact Name" required/>
                        <p className="addWarehouse__label">Position</p>
                        <input type="text" name="Position" className="addWarehouse__input" placeholder="Position"required />
                        <p className="addWarehouse__label">Phone Number</p>
                        <input type="text" name="PhoneNumber" className="addWarehouse__input" placeholder="Phone Number"required />
                        <p className="addWarehouse__label">Email</p>
                        <input type="text" name="Email" className="addWarehouse__input" placeholder="Email" required/>
                    </section>
                </div>
                <div className="addWarehouse__footer">
                    <div className="addWarehouse__button">
                        <input type="hidden" name="action" value="" />
                        <button className="addWarehouse__button--cancel" type="cancel" onClick={() => document.getElementsByName('action')[0].value = 'cancel'}>Cancel</button>
                        <button className="addWarehouse__button--submit" type="submit" onClick={() => document.getElementsByName('action')[0].value = 'save'}>+ Add Warehouse</button>
                    </div>
                </div>
            </form>
        </section>

    )
}
export default AddWarehouse;