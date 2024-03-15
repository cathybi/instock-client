import "./SelectedInventory.scss";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import { InStockApi } from "../../utils/Util";
import { useParams } from "react-router-dom";

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
      <div className="inventory-item">
        <div className="inventory-item__nav">
          <div className="inventory-item__back">
            <Link className="inventory-item__link" to="/inventory">
              <img
                src={arrowBack}
                alt="arrow back"
                className="inventory-item__arrowIcon"
              />
            </Link>
            <h1 className="inventory-item__title">Television</h1>
          </div>

          <div className="sinventory-item__edit">
            <Link
              className="inventory-item__link"
              to={`/inventory/${inventoryItem.id}/edit`}
            >
              <img
                src={editIcon}
                alt="edit icon"
                className="inventory-item__editIcon"
              />
            </Link>
          </div>
        </div>

        <div className="inventory-item__underline"></div>

        <div className="inventory-item__details-container">
          <div className="inventory-item__divider"></div>

          <div className="inventory-item__details">
            <h4 className="inventory-item__subheading">ITEM DESCRIPTION:</h4>
            <p className="inventory-item__information">
              {inventoryItem.description}
            </p>
          </div>

          <div className="inventory-item__details">
            <h4 className="inventory-item__subheading">CATEGORY:</h4>
            <p className="inventory-item__information">
              {inventoryItem.category}
            </p>
          </div>

          <div className="inventory-item__details-status">
            <h4 className="inventory-item__subheading">STATUS:</h4>

            <div
              className={`inventory__status ${
                inventoryItem.status === "In Stock"
                  ? "in-stock"
                  : "out-of-stock"
              }`}
            >
              {inventoryItem.status}
            </div>
          </div>

          <div className="inventory-item__details-quantity">
            <h4 className="inventory-item__subheading">QUANTITY:</h4>
            <p className="inventory-item__information">
              {inventoryItem.quantity}
            </p>
          </div>

          <div className="inventory-item__details">
            <h4 className="inventory-item__subheading">WAREHOUSE:</h4>
            <p className="inventory-item__information">
              {inventoryItem.warehouseName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEditInventory;
