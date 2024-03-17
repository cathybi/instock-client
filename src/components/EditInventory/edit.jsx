import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import React, { useState } from "react";
import "./EditInventory.scss";

const baseURL = "http://localhost:5050/api/inventory";

function EditInventory() {
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    const editInventory = {
      warehouse_name: event.target.WarehouseName.value,
      item_name: event.target.ItemName.value,
      description: event.target.Description.value,
      category: event.target.Category.value,
      status: event.target.Status.value,
    };
    console.log(editInventory);
    async function EditNowInventory() {
      const response = await axios.post(`${baseURL}`, editInventory);
    }
    EditNowInventory();
    navigate("/inventory");
    alert("Inventory Info Updated!");
  }

  const [stockStatus, setStockStatus] = useState("inStock");

  const handleStatusChange = (event) => {
    setStockStatus(event.target.Status.value);
  };

  return (
    <section className="edit-inventory">
      <div className="edit-inventory__nav">
        <div className="edit-inventory__back">
          <Link className="edit-inventory__link" to="/inventory">
            <img
              src={arrowBack}
              alt="arrow back"
              className="edit-inventory__arrowIcon"
            />
          </Link>
          <h1 className="edit-inventory__title">Edit Inventory Item</h1>
        </div>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="edit-inventory__form"
        name="edit-inventory__form"
      >
        <div className="edit-inventory__text">
          <section className="edit-inventory__details--item">
            <h2 className="edit-inventory__subtitle">Item Details</h2>
            <p className="edit-inventory__label">Item Name</p>
            <input
              type="text"
              name="ItemName"
              className="edit-inventory__input"
              placeholder="Television"
            />
            <p className="edit-inventory__label">Description</p>
            <input
              type="text"
              name="Description"
              className="edit-inventory__input edit-inventory__input--height"
              placeholder="This 50'', 4K LED TV provides a crystal-clear picture and vivid colors."
            />
            <p className="edit-inventory__label">Category</p>
            <input
              type="text"
              name="Category"
              className="edit-inventory__input"
              placeholder="Electronics"
            />
          </section>

          <section className="edit-inventory__details--availablity">
            <h2 className="edit-inventory__subtitle">Item Availability</h2>
            <p className="edit-inventory__label">Status</p>
            <label className="edit-inventory__body">
              <input
                type="radio"
                value="inStock"
                checked={stockStatus === "inStock"}
                onChange={handleStatusChange}
              />
              In Stock
            </label>
            <label className="edit-inventory__body edit-inventory__body--grey">
              <input
                type="radio"
                value="inStock"
                checked={stockStatus === "outOfStock"}
                onChange={handleStatusChange}
              />
              Out of Stock
            </label>

            <p className="edit-inventory__label edit-inventory__label--padding">
              Warehouse
            </p>
            <input
              type="text"
              name="WarehouseName"
              className="edit-inventory__input"
              placeholder="Manhattan"
            />
          </section>
        </div>

        <div className="edit-inventory__button">
          <button className="edit-inventory__button--cancel" type="cancel">
            Cancel
          </button>
          <button className="edit-inventory__button--submit" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
}
export default EditInventory;
