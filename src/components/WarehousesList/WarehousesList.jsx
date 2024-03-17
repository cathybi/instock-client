import "./WarehousesList.scss";
import { useState, useEffect } from "react";
import deleteIcon from "./../../assets/icons/delete_outline-24px.svg";
import editIcon from "./../../assets/icons/edit-24px.svg";
import rightIcon from "./../../assets/icons/chevron_right-24px.svg";
import sortIcon from "./../../assets/icons/sort-24px.svg";
import { InStockApi } from "../../utils/Util.js";

/**
 * #J24BTW-9: Front-End: Warehouse List Component (Responsive)
 * Added this componet to show the list of warehouses, 
 * when you click on "warehouses" link on the header.
 * @returns 
 */
const WarehousesList = () => {
  const stockApi = new InStockApi();
  //Added "warehouseList" state variable to show all warhouse's list
  const [warehouseList, setWarehouseList] = useState([]);

  /**
   *Below useEffect() will run only once, when component mounts for the first time
   */
  useEffect(() => {
    async function getWarehousesList() {
      try {
        const response = await stockApi.getwarehousesList();
        setWarehouseList(response);
      } catch (error) {
        console.log("Error in getting videos list from useEffect()->getWarehouseList() method", error);
      }
    }
    getWarehousesList();
  }, []);

  /**
   * when you click on Delete, handleDelete get called
   * @param {*} event 
   */
  function handleDelete(event) {
    event.preventDefault();  
  }

  /**
   * When you click on edit,handleEdit get called
   * @param {*} event 
   */
  function handleEdit(event) {
    event.preventDefault();
  }

  /**
   * When you click on add text in Serach textfeild,handleSearch get called
   * @param {*} event 
   */
  function handleSearch(event) {
    event.preventDefault();   
  }

  /**
   * When you click on "Add New Item" button,handleAddNewItem get called
   * @param {*} event 
   */
  function handleAddNewItem(event) {
    event.preventDefault();
    console.log("AddNewItem button clicked.");
  }

  return (
    <div className="warehouse-list">
      <form className="warehouse-list__form">
        <div className="warehouse-list__title">Warehouses </div>
        <input type="text" id="search" name="search" onClick={handleSearch} placeholder="Search..." className="warehouse-list__search"></input>
        <button className="warehouse-list__button" onClick={handleAddNewItem}>+ Add New Warehouse</button>
      </form>

      <ul className="warehouse-list__list">
        <li className="warehouse-list__table-headings">

          <div className="warehouse-list__column-warehouse">
            <div>WAREHOUSE</div>
            <img className="warehouse-list__sort-icon" alt="SortIcon" src={sortIcon} />
          </div>

          <div className="warehouse-list__column-address">
            <div>ADDRESS</div>
            <img className="warehouse-list__sort-icon" alt="SortIcon" src={sortIcon} />
          </div>

          <div className="warehouse-list__column-name">
            <div>CONTACT NAME</div>
            <img className="warehouse-list__sort-icon" alt="SortIcon" src={sortIcon} />
          </div>

          <div className="warehouse-list__column-information">
            <div>CONTACT INFORMATION</div>
            <img className="warehouse-list__sort-icon" alt="SortIcon" src={sortIcon} />
          </div>

          <div className="warehouse-list__column-actions">ACTIONS</div>
        </li>
        {
          warehouseList && warehouseList.map((warehouse) => (

            <li key={warehouse.id} className="warehouse-list__item">
              <div className="warehouse-list__warehouse">
                <div className="warehouse-list__label">WAREHOUSE</div>
                <div className="warehouse-list__warehouse-row">
                  <div>{warehouse.warehouse_name}</div>
                  <img className="warehouse-list__right-image" alt="RightIcon" src={rightIcon} />
                </div>
              </div>

              <div className="warehouse-list__address-tablet">
                <div className="warehouse-list__label">ADDRESS</div>
                <div>{warehouse.address}</div>
                <div>{warehouse.city}</div>
              </div>

              <div className="warehouse-list__name-tablet">
                <div className="warehouse-list__label">CONTACT NAME</div>
                <div>{warehouse.contact_name}</div>
              </div>

              <div className="warehouse-list__name">
                <div className="warehouse-list__label">CONTACT NAME</div>
                <div>{warehouse.contact_name}</div>
              </div>

              <div className="warehouse-list__address">
                <div className="warehouse-list__label">ADDRESS</div>
                <div>{warehouse.address}</div>
                <div>{warehouse.city}</div>
              </div>

              <div className="warehouse-list__contact-info">
                <div className="warehouse-list__label">CONTACT INFORMATION</div>
                <div>{warehouse.contact_phone}</div>
                <div>{warehouse.contact_email}</div>
              </div>

              <div className="warehouse-list__actions">
                <img className="warehouse-list__actions-image"
                  src={deleteIcon} alt="DeleteIcon" onClick={handleDelete} />

                <img className="warehouse-list__actions-image"
                  src={editIcon} alt="EditIcon" onClick={handleEdit} />
              </div>

            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default WarehousesList;
