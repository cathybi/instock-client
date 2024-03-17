import { Link, useNavigate } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import "../AddWarehouse/AddWarehouse.scss"
import { InStockApi } from "../../utils/Util";
import WarehousesPage from "../../pages/WarehousesPage/WarehousesPage";


function AddWarehouse (){

    const navigate  = useNavigate();
    const api = new InStockApi();

    function handleFormSubmit (event){
        event.preventDefault();
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
        navigate("/warehouse/add");
        alert("New Warehouse successfully Added!");
    }

    return (
        <section className="addWarehouse">
            <div className="EditWarehouse__title--part">
                <Link to={WarehousesPage}><img className="EditWarehouse__arrowBack" src={arrowBack} alt="arrowBack" /></Link>
                <h1 className="EditWarehouse__title">Add New Warehouse</h1>
            </div>
            <form onSubmit={handleFormSubmit} className="addWarehouse__form" name="addWarehouse__form">
                <div className="addWarehouse__text">
                    <section className="addWarehouse__details--warehouse">
                        <h2 className="addWarehouse__subtitle">Warehouse Details</h2>
                        <p className="addWarehouse__label">Warehouse Name</p>
                        <input type="text" name="WarehouseName" className="addWarehouse__input" placeholder="Warehouse Name"/>
                        <p className="addWarehouse__label">Street Address</p>
                        <input type="text" name="StreetAddress" className="addWarehouse__input" placeholder="Street Address"/>
                        <p className="addWarehouse__label">City</p>
                        <input type="text" name="City" className="addWarehouse__input" placeholder="City"/>
                        <p className="addWarehouse__label">Country</p>
                        <input type="text" name="Country" className="addWarehouse__input" placeholder="Country"/>
                    </section>

                    <section className="addWarehouse__details--contact">
                        <h2 className="addWarehouse__subtitle">Contact Details</h2>
                        <p className="addWarehouse__label">Contact Name</p>
                        <input type="text" name="ContactName" className="addWarehouse__input" placeholder="Contact Name"/>
                        <p className="addWarehouse__label">Position</p>
                        <input type="text" name="Position" className="addWarehouse__input" placeholder="Position"/>
                        <p className="addWarehouse__label">Phone Number</p>
                        <input type="text" name="PhoneNumber" className="addWarehouse__input" placeholder="Phone Number"/>
                        <p className="addWarehouse__label">Email</p>
                        <input type="text" name="Email" className="addWarehouse__input" placeholder="Email"/>
                    </section>
                </div>
                <div className="addWarehouse__footer">
                    <div className="addWarehouse__button">
                        <button className="addWarehouse__button--cancel" type="cancel">Cancel</button>
                        <button className="addWarehouse__button--submit" type="submit">+ Add Warehouse</button>
                    </div>
                </div>
            </form>
        </section>

    )
}
export default AddWarehouse;