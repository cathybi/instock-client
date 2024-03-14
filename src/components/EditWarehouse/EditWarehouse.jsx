import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../EditWarehouse/EditWarehouse.scss"

const baseURL = "http://localhost:8080/warehouse";
const defaultID = "2";

function EditWarehouse (){

    const navigate  = useNavigate();

    function handleFormSubmit (event){
        event.preventDefault();
        const updatedWarehouse = {
            warehouse_name: event.target.WarehouseName.value,
            address: event.target.StreetAddress.value,
            city: event.target.City.value,
            country: event.target.Country.value,
            contact_name: event.target.ContactName.value,
            contact_position: event.target.Position.value,
            contact_phone: event.target.PhoneNumber.value,
            contact_email: event.target.Email.value
        }
        console.log(updatedWarehouse)
        async function updateWarehouse (ID){
            const response = await axios.patch(
                `${baseURL}/${ID}`,
                updatedWarehouse
            )
        }
        updateWarehouse();
        navigate("/warehouse");
        alert("Warehouse Info Updated!");
    }

    return (
        <section className="EditWarehouse">
            <h1 className="EditWarehouse__title">Edit Warehouse</h1>
            <form onSubmit={handleFormSubmit} className="EditWarehouse__form" name="EditWarehouse__form">
                <div className="EditWarehouse__text">
                    <section className="EditWarehouse__details--warehouse">
                        <h2 className="EditWarehouse__subtitle">Warehouse Details</h2>
                        <p className="EditWarehouse__label">Warehouse Name</p>
                        <input type="text" name="WarehouseName" className="EditWarehouse__input" placeholder="Washington"/>
                        <p className="EditWarehouse__label">Street Address</p>
                        <input type="text" name="StreetAddress" className="EditWarehouse__input" placeholder="33 Pearl Street SW"/>
                        <p className="EditWarehouse__label">City</p>
                        <input type="text" name="City" className="EditWarehouse__input" placeholder="Washington"/>
                        <p className="EditWarehouse__label">Country</p>
                        <input type="text" name="Country" className="EditWarehouse__input" placeholder="USA"/>
                    </section>

                    <section className="EditWarehouse__details--contact">
                        <h2 className="EditWarehouse__subtitle">Contact Details</h2>
                        <p className="EditWarehouse__label">Contact Name</p>
                        <input type="text" name="ContactName" className="EditWarehouse__input" placeholder="Graeme Lyon"/>
                        <p className="EditWarehouse__label">Position</p>
                        <input type="text" name="Position" className="EditWarehouse__input" placeholder="Warehouse Manager"/>
                        <p className="EditWarehouse__label">Phone Number</p>
                        <input type="text" name="PhoneNumber" className="EditWarehouse__input" placeholder="+1(647)504-0911"/>
                        <p className="EditWarehouse__label">Email</p>
                        <input type="text" name="Email" className="EditWarehouse__input" placeholder="glyon@instock.com"/>
                    </section>
                </div>
                <div className="EditWarehouse__button">
                    <button className="EditWarehouse__button--save" type="submit">Save</button>
                    <button className="EditWarehouse__button--cancel" type="cancel">Cancel</button>
                </div>
            </form>
        </section>

    )
}
export default EditWarehouse;