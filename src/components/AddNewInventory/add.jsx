import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./AddNewInventory.scss";

const baseURL = "http://localhost:5050/api/inventory";

function AddNewInventory() {
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    const newInventory = {
      warehouse_name: event.target.WarehouseName.value,
      item_name: event.target.ItemName.value,
      description: event.target.Description.value,
      category: event.target.Category.value,
      status: event.target.Status.value,
      quantity: event.target.Quantity.value,
    };
    console.log(newInventory);
    async function addNewInventory() {
      const response = await axios.post(`${baseURL}`, newInventory);
    }
    addNewInventory();
    navigate("/inventory");
    alert("New Inventory successfully Added!");
  }

  const [stockStatus, setStockStatus] = useState("inStock");

  const handleStatusChange = (event) => {
    setStockStatus(event.target.Status.value);
  };

  return (
    <section className="new-inventory">
      <div className="new-inventory__nav">
        <div className="new-inventory__back">
          <Link className="new-inventory__link" to="/inventory">
            <img
              src={arrowBack}
              alt="arrow back"
              className="new-inventory__arrowIcon"
            />
          </Link>
          <h1 className="new-inventory__title">Add New Inventory Item</h1>
        </div>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="new-inventory__form"
        name="new-inventory__form"
      >
        <div className="new-inventory__text">
          <section className="new-inventory__details--item">
            <h2 className="new-inventory__subtitle">Item Details</h2>
            <p className="new-inventory__label">Item Name</p>
            <input
              type="text"
              name="ItemName"
              className="new-inventory__input"
              placeholder="Item Name"
            />
            <p className="new-inventory__label">Description</p>
            <input
              type="text"
              name="Description"
              className="new-inventory__input new-inventory__input--height"
              placeholder="Please enter a brief item description..."
            />
            <p className="new-inventory__label">Category</p>
            <input
              type="text"
              name="Category"
              className="new-inventory__input"
              placeholder="Please select"
            />
          </section>

          <section className="new-inventory__details--availablity">
            <h2 className="new-inventory__subtitle">Item Availability</h2>
            <p className="new-inventory__label">Status</p>
            <label className="new-inventory__body">
              <input
                type="radio"
                value="inStock"
                checked={stockStatus === "inStock"}
                onChange={handleStatusChange}
              />
              In Stock
            </label>
            <label className="new-inventory__body new-inventory__body--grey">
              <input
                type="radio"
                value="inStock"
                checked={stockStatus === "outOfStock"}
                onChange={handleStatusChange}
              />
              Out of Stock
            </label>

            <p className="new-inventory__label new-inventory__label--padding">
              Quantity
            </p>
            <input
              type="text"
              name="Quantity"
              className="new-inventory__input"
              placeholder="1"
            />
            <p className="new-inventory__label">Warehouse</p>
            <input
              type="text"
              name="WarehouseName"
              className="new-inventory__input"
              placeholder="Please Select"
            />
          </section>
        </div>

        <div className="new-inventory__button">
          <button className="new-inventory__button--cancel" type="cancel">
            Cancel
          </button>
          <button className="new-inventory__button--submit" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddNewInventory;
