import "./AddEditInventory.scss";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AddEditInventory() {
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    axios
      .get(``)
      .then((res) => {
        setInventoryItem(res.data);
      })
      .catch((err) => console.error);
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
            {/* <p className="inventory-item__information">{inventoryItem.description}</p> */}
            <p className="inventory-item__information">
              This 50", 4K LED TV provides a crystal-clear picture and vivid
              colors.
            </p>
          </div>

          <div className="inventory-item__details">
            <h4 className="inventory-item__subheading">CATEGORY:</h4>
            {/* <p className="inventory-item__information">{inventoryItem.category}</p> */}
            <p className="inventory-item__information">Electronics</p>
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
            {/* <p className="inventory-item__information">{inventoryItem.quantity}</p> */}
            <p className="inventory-item__information">500</p>
          </div>

          <div className="inventory-item__details">
            <h4 className="inventory-item__subheading">WAREHOUSE:</h4>
            {/* <p className="inventory-item__information">{inventoryItem.warehouseName}</p> */}
            <p className="inventory-item__information">Manhattan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEditInventory;
