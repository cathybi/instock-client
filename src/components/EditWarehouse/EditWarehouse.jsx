import { Link, useNavigate } from "react-router-dom";
import { InStockApi } from "../../utils/Util";
import { useParams } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import "../EditWarehouse/EditWarehouse.scss"
import { useEffect } from "react";
import WarehousesPage from "../../pages/WarehousesPage/WarehousesPage";

function EditWarehouse (){

    const api = new InStockApi();
    const { warehouseId } = useParams();
    const navigate  = useNavigate();
    console.log("warehouseId: ",warehouseId);

    useEffect(()=>{
         async function getWarehouseOrigData(){
            const data_to_edit = await api.getWarehouseDetail(warehouseId);
            const form = document.getElementById("EditWarehouse__form");
            form.elements['WarehouseName'].value = data_to_edit.warehouse_name;
            form.elements['StreetAddress'].value = data_to_edit.address;
            form.elements['City'].value = data_to_edit.city;
            form.elements['Country'].value = data_to_edit.country;
            form.elements['ContactName'].value = data_to_edit.contact_name;
            form.elements['Position'].value = data_to_edit.contact_position;
            form.elements['PhoneNumber'].value = data_to_edit.contact_phone;
            form.elements['Email'].value = data_to_edit.contact_email;
        };
        getWarehouseOrigData();
    },[warehouseId]);

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
        async function updateWarehouse (id,updatedWarehouse){
            await api.updateWarehouse(id,updatedWarehouse);
        };
        updateWarehouse(warehouseId,updatedWarehouse);
        navigate("/warehouse");
        alert("Warehouse Info Updated!");
    }

    return (
        <section className="EditWarehouse">
            <div className="EditWarehouse__title--section">
                <img className="EditWarehouse__arrowBack" src={arrowBack} alt="arrowBack" onClick={handleBack}/>
                <h1 className="EditWarehouse__title">Edit Warehouse</h1>
            </div>
            <hr className="EditWarehouse__hr" />
            <form onSubmit={handleFormSubmit} className="EditWarehouse__form" id="EditWarehouse__form" name="EditWarehouse__form">
                <div className="EditWarehouse__text">
                    <section className="EditWarehouse__details--warehouse">
                        <h2 className="EditWarehouse__subtitle">Warehouse Details</h2>
                        <p className="EditWarehouse__label">Warehouse Name</p>
                        <input type="text" name="WarehouseName" className="EditWarehouse__input" />
                        <p className="EditWarehouse__label">Street Address</p>
                        <input type="text" name="StreetAddress" className="EditWarehouse__input" />
                        <p className="EditWarehouse__label">City</p>
                        <input type="text" name="City" className="EditWarehouse__input" />
                        <p className="EditWarehouse__label">Country</p>
                        <input type="text" name="Country" className="EditWarehouse__input" />
                    </section>
                    <hr className="EditWarehouse__hr2" />
                    <section className="EditWarehouse__details--contact">
                        <h2 className="EditWarehouse__subtitle">Contact Details</h2>
                        <p className="EditWarehouse__label">Contact Name</p>
                        <input type="text" name="ContactName" className="EditWarehouse__input" />
                        <p className="EditWarehouse__label">Position</p>
                        <input type="text" name="Position" className="EditWarehouse__input" />
                        <p className="EditWarehouse__label">Phone Number</p>
                        <input type="text" name="PhoneNumber" className="EditWarehouse__input" />
                        <p className="EditWarehouse__label">Email</p>
                        <input type="text" name="Email" className="EditWarehouse__input" />
                    </section>
                </div>
                <div className="EditWarehouse__footer">
                    <div className="EditWarehouse__button">
                        <input type="hidden" name="action" value="" />
                        <button className="EditWarehouse__button--cancel" type="cancel" onClick={() => document.getElementsByName('action')[0].value = 'cancel'}>Cancel</button>
                        <button className="EditWarehouse__button--save" type="submit" onClick={() => document.getElementsByName('action')[0].value = 'save'}>Save</button>
                    </div>
                </div>
            </form>
        </section>

    )
}
export default EditWarehouse;