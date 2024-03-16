import "./SelectedInventory.scss";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { InStockApi } from "../../utils/Util";
import { useParams } from "react-router-dom";

<<<<<<< HEAD
const SelectedInventory = () => {
    return (
        <></>
    );
}

export default SelectedInventory;
=======
function AddEditInventory() {
  const [inventoryItem, setInventoryItem] = useState({});
  const { inventoryId } = useParams();
  const api = new InStockApi();

  const initInventoryItem = async (inventoryId) => {
    const inventoryItem = await api.getInventoryDetail(inventoryId);
    setInventoryItem(inventoryItem);
  };

  useEffect(() => {
    if (inventoryId) {
      console.log(inventoryId);
      initInventoryItem(inventoryId);
    }
  }, []);

  return (
    <>
      <div className="inventory-detail">
        <div className="inventory-item__nav">
          <div className="inventory-item__back">
            <Link className="inventory-item__link" to="/inventory">
              <img src={arrowBack} alt="arrow back" className="inventory-item__arrowIcon" />
            </Link>
            <h1 className="inventory-item__title">{inventoryItem.item_name}</h1>
          </div>

          <div className="inventory-item__edit">
            <Link
              className="inventory-item__link" to={`/inventory/${inventoryItem.id}/edit`}>
              <img src={editIcon} alt="edit icon" className="inventory-item__editIcon" />
            </Link>
          </div>
        </div>
        <div className="inventory-description">
          <div className="box-one">

            <div className="description">
              <h4 className="heading">ITEM DESCRIPTION:</h4>
              <p className="description__information">{inventoryItem.description}</p>
            </div>

            <div className="item">
              <h4 className="heading">CATEGORY:</h4>
              <p className="item__information">{inventoryItem.category}</p>
            </div>
          </div>

          <div className="box-two">

            <div className="box-status">
              <div className="status">
                <h4 className="heading">STATUS:</h4>
                <div className={`status ${inventoryItem.status === "In Stock" ? "in-stock" : "out-of-stock"}`}>
                  {inventoryItem.status}
                </div>
              </div>

              <div className="warehouse">
                <h4 className="heading">WAREHOUSE:</h4>
                <p className="warehouse__information">{inventoryItem.warehouse_name}</p>
              </div>
            </div>

            <div className="box-quantity">
              <div className="quantity">
                <h4 className="heading">QUANTITY:</h4>
                <p className="quantity__information">{inventoryItem.quantity}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AddEditInventory;
>>>>>>> development
