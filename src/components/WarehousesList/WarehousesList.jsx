import "./WarehousesList.scss";
import { useState, useEffect } from "react";
import deleteIcon from "./../../assets/icons/delete_outline-24px.svg";
import editIcon from "./../../assets/icons/edit-24px.svg";
import rightIcon from "./../../assets/icons/chevron_right-24px.svg";
import sortIcon from "./../../assets/icons/sort-24px.svg";
import closeIcon from "./../../assets/icons/close-24px.svg";
import { InStockApi } from "../../utils/Util.js";
import DeleteWarehouse from "./../DeleteWarehouse/DeleteWarehouse.jsx";

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

  //Added state Variables for delete functionality 
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [warehouseToDelete, setWarehouseToDelete] = useState({});  

  async function getWarehousesList() {
    try {
      const response = await stockApi.getwarehousesList();
      setWarehouseList(response);
    } catch (error) {
      console.log("Error in getting videos list from useEffect()->getWarehouseList() method", error);
    }
  }

  /**
   *Below useEffect() will run only once, when component mounts for the first time
   */
  useEffect(() => {   
    getWarehousesList();
  }, []);  

  /**
   * when you click on Delete, handleDelete get called to delete selected warehouse.
   * @param {*} event 
   */
  function handleDelete( warehouseObject) {     
    setShowDeleteModal(true);
    setWarehouseToDelete(warehouseObject);
  } 

  function closeModal() {     
    setShowDeleteModal(false);
    getWarehousesList();     
  } 

  function handleEdit() {
   
  }
 
  function handleSearch() {
  }

  /**
   *  When you click on "Add New Item" button,handleSubmit get called
   * @param {*} event 
   */
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="warehouse-list">
      <form className="warehouse-list__form"
        onSubmit={handleSubmit}>
        <div className="warehouse-list__title">Warehouses </div>
        <input type="text" id="search" name="search" onClick={handleSearch} placeholder="Search..." className="warehouse-list__search"></input>
        <button className="warehouse-list__button">+ Add New Warehouse</button>
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
                  src={deleteIcon} alt="DeleteIcon"
                  onClick={() => handleDelete({id:warehouse.id,name:warehouse.warehouse_name})} />

                <img className="warehouse-list__actions-image"
                  src={editIcon} alt="EditIcon" onClick={handleEdit} />
              </div>

            </li>
          ))
        }
      </ul>   

      <DeleteWarehouse isOpen={showDeleteModal}
        onRequestClose={closeModal}
        warehouseToDelete={warehouseToDelete}       
      />

    </div>
  );
};

export default WarehousesList;
