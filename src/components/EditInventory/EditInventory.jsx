import axios from "axios";
import { Link } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditInventory.scss";

function EditInventory() {
  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    async function fetchWarehouses() {
      try {
        const response = await axios.get(
          "http://localhost:5050/api/warehouses"
        );
        setWarehouses(response.data);
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    }

    fetchWarehouses();
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/inventories`
        );
        const categoriesData = response.data.map(
          (inventory) => inventory.category
        );
        const uniqueCategories = Array.from(new Set(categoriesData));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const [inventoryData, setInventoryData] = useState({
    id: "",
    warehouse_name: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const { inventoryId } = useParams();

  const [stockStatus, setStockStatus] = useState("In Stock");
  const handleStatusChange = (e) => {
    setStockStatus(e.target.value);
  };

  useEffect(() => {
    async function getInventoryDetail(inventoryId) {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/inventories/${inventoryId}`
        );
        const {
          warehouse_name,
          item_name,
          description,
          category,
          status,
          quantity,
        } = response.data;
        // console.log(response.data);
        setInventoryData({
          warehouse_name: warehouse_name,
          item_name: item_name,
          description: description,
          category: category,
          status: status,
          quantity: Number(quantity),
        });
      } catch (error) {
        if (error) {
          console.log("cannot get an inventory");
        }
      }
    }
    if (inventoryId) {
      getInventoryDetail(inventoryId);
    } else {
      console.log("Not this item");
    }
  }, [inventoryId]);

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
      inventoryData.status = stockStatus;
      const response = await axios.put(
        `http://localhost:5050/api/inventories/${inventoryId}`,
        inventoryData
      );
      console.log("Request to BackEnd:", response);
      alert("Item updated successfully");
    } catch (error) {
      console.error("Error updating inventory: ", error);
    }
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
        <section className="edit-inventory__text">
          <div className="edit-inventory__details--item">
            <h2 className="edit-inventory__subtitle">Item Details</h2>
            <label className="edit-inventory__label" htmlFor="itemName">
              Item Name
            </label>
            <input
              type="text"
              name="item_name"
              id="itemName"
              value={inventoryData.item_name}
              className="edit-inventory__input"
              placeholder="Television"
              onChange={handleChange}
            />
            <label className="edit-inventory__label" htmlFor="description">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={inventoryData.description}
              className="edit-inventory__input edit-inventory__input--wrapper"
              placeholder="This 50'', 4K LED TV provides a crystal-clear picture and vivid colors."
              onChange={handleChange}
            />
            <label className="edit-inventory__label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={inventoryData.category}
              className="edit-inventory__input edit-inventory__input--custom-select"
              onChange={handleChange}
            >
              <option value="" className="edit-inventory__select">
                Please Select
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="edit-inventory__details--availablity">
            <h2 className="edit-inventory__subtitle">Item Availability</h2>
            <p className="edit-inventory__label">Status</p>
            <input
              type="radio"
              id="status"
              name="status"
              value="In Stock"
              checked={stockStatus === "In Stock"}
              onChange={handleStatusChange}
            />
            <label className="edit-inventory__body" htmlFor="status">
              In Stock
            </label>
            <input
              type="radio"
              id="status"
              name="status"
              value="Out of Stock"
              checked={stockStatus === "Out of Stock"}
              onChange={handleStatusChange}
            />
            <label
              className="edit-inventory__body edit-inventory__body--grey"
              htmlFor="status"
            >
              Out of Stock
            </label>

            {stockStatus === "In Stock" && (
              <div>
                <p
                  className="edit-inventory__label edit-inventory__label--padding"
                  htmlFor="quantity"
                >
                  Quantity
                </p>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  value={inventoryData.quantity}
                  className="edit-inventory__input"
                  placeholder="1"
                  onChange={handleChange}
                />
              </div>
            )}

            <p
              className="edit-inventory__label edit-inventory__label--padding"
              htmlFor="warehouse_name"
            >
              Warehouse
            </p>
            <select
              className="edit-inventory__input edit-inventory__input--custom-select"
              id="warehouse_name"
              name="warehouse_name"
              value={inventoryData.warehouse_name}
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.warehouse_name}>
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="edit-inventory__button">
          <button className="edit-inventory__button--cancel" type="cancel">
            Cancel
          </button>
          <button className="edit-inventory__button--submit" type="submit">
            Save
          </button>
        </section>
      </form>
    </section>
  );
}
export default EditInventory;
