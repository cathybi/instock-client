import axios from "axios";
import { Link } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./AddNewInventory.scss";

function AddNewInventory() {
  const [inventoryData, setInventoryData] = useState({
    id: "",
    warehouse_name: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const [stockStatus, setStockStatus] = useState("inStock");

  const handleStatusChange = (e) => {
    setStockStatus(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("handlesubmit:", inventoryData);
      const response = await axios.post(
        `http://localhost:5050/api/inventories/`,
        inventoryData
      );
      console.log("Request to BackEnd:", response);
      const {
        id,
        warehouse_name,
        item_name,
        description,
        category,
        status,
        quantity,
      } = response.data;
      alert("Item updated successfully");
      setInventoryData({
        id: id,
        warehouse_name: warehouse_name,
        item_name: item_name,
        description: description,
        category: category,
        status: status,
        quantity: quantity,
      });
    } catch (error) {
      console.error("Error updating inventory: ", error);
    }
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
            <label className="new-inventory__label" htmlFor="itemName">
              Item Name
            </label>
            <input
              type="text"
              name="item_name"
              id="itemName"
              value={inventoryData.item_name}
              className="new-inventory__input"
              placeholder="Item Name"
              onChange={handleChange}
            />
            <label className="new-inventory__label" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              value={inventoryData.description}
              className="new-inventory__input"
              placeholder="Please enter a brief item description..."
              onChange={handleChange}
            />
            <label className="new-inventory__label" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              name="Category"
              id="category"
              value={inventoryData.category}
              className="new-inventory__input"
              placeholder="Please select"
              onChange={handleChange}
            />
          </section>

          <section className="new-inventory__details--availablity">
            <h2 className="new-inventory__subtitle">Item Availability</h2>
            <p className="new-inventory__label">Status</p>
            <input
              type="radio"
              id="status"
              name="status"
              value="instock"
              checked={stockStatus === "inStock"}
              onChange={handleStatusChange}
            />
            <label className="new-inventory__body" htmlFor="status">
              In Stock
            </label>
            <input
              type="radio"
              id="status"
              name="status"
              value="instock"
              checked={stockStatus === "outOfStock"}
              onChange={handleStatusChange}
            />
            <label
              className="new-inventory__body new-inventory__body--grey"
              htmlFor="status"
            >
              Out of Stock
            </label>

            <p
              className="new-inventory__label new-inventory__label--padding"
              htmlFor="quantity"
            >
              Quantity
            </p>
            <input
              type="text"
              name="quantity"
              id="quantity"
              value={inventoryData.quantity}
              className="new-inventory__input"
              placeholder="0"
              onChange={handleChange}
            />

            <label className="new-inventory__label" htmlFor="warehouseName">
              Warehouse
            </label>
            <input
              type="text"
              id="warehouseName"
              name="warehouseName"
              value={inventoryData.warehouse_name}
              className="new-inventory__input"
              placeholder="Please Select"
              onChange={handleChange}
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
