import "./AddNewInventory.scss";
import { useNavigate } from "react-router-dom";
import arrowBack from "./../../assets/icons/arrow_back-24px.svg";
import React, { useState, useEffect } from "react";
import { InStockApi } from "../../utils/Util";

function AddNewInventory() {
  const navigate  = useNavigate();
  const api = new InStockApi();
  const [inventoryData, setInventoryData] = useState({
    warehouse_name: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: 0,
  });

  const [stockStatus, setStockStatus] = useState("In Stock");
  const handleStatusChange = (e) => {
    setStockStatus(e.target.value);
  };

  const [warehouses, setWarehouses] = useState([]);
  useEffect(() => {
    async function fetchWarehouses() {
      try {
        const warehouseList = await api.getwarehousesList();
        setWarehouses(warehouseList);
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
        const inventorylist = await api.getInventoryList();
        const categoriesData = inventorylist.map(
          (inventory) => inventory.category
        );
        const uniqueCategories = Array.from(new Set(categoriesData)); // Ensure unique categories
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleBack() {
    navigate(-1);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const action = e.target.action.value;
    if (action === "cancel") {
      navigate(-1);
      return;
    }
    try {
      console.log("handlesubmit:", inventoryData);
      inventoryData.status = stockStatus;
      await api.addInventory(inventoryData);
      alert("Item updated successfully");
      navigate("/inventory");
    } catch (error) {
      console.error("Error updating inventory: ", error);
    }
  };

  return (
    <section className="new-inventory">
      <div className="new-inventory__nav">
        <div className="new-inventory__back">
          <img
            src={arrowBack}
            alt="arrow back"
            className="new-inventory__arrowIcon"
            onClick={handleBack}
          />
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
              required
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
              required
            />
            <label className="new-inventory__label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={inventoryData.category}
              className="new-inventory__input new-inventory__input--custom-select"
              onChange={handleChange}
              required
            >
              <option value="" className="new-inventory__select ">
                Please Select
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </section>

          <section className="new-inventory__details--availablity">
            <h2 className="new-inventory__subtitle">Item Availability</h2>
            <p className="new-inventory__label">Status</p>
            <input
              type="radio"
              id="status"
              name="status"
              value="In Stock"
              checked={stockStatus === "In Stock"}
              onChange={handleStatusChange}
            />
            <label className="new-inventory__body" htmlFor="status">
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
              className="new-inventory__body new-inventory__body--grey"
              htmlFor="status"
            >
              Out of Stock
            </label>

            {stockStatus === "In Stock" && (
              <div>
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
                  required
                />
              </div>
            )}

            <p
              className="new-inventory__label new-inventory__label--padding"
              htmlFor="warehouse_name"
            >
              Warehouse
            </p>
            <select
              className="new-inventory__input new-inventory__input--custom-select"
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
          </section>
        </div>

        <div className="new-inventory__button">
        <input type="hidden" name="action" value="" />
          <button className="new-inventory__button--cancel" type="cancel"  onClick={() => document.getElementsByName('action')[0].value = 'cancel'}>
            Cancel
          </button>
          <button className="new-inventory__button--submit" type="submit" onClick={() => document.getElementsByName('action')[0].value = 'save'}>
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddNewInventory;
