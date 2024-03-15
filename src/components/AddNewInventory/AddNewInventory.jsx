import "./AddNewInventory.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import arrowDrop from "../../assets/icons/arrow_drop_down-24px.svg";
import React from "react";
import { Link } from "react-router-dom";

function AddNewInventory() {
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

      <div className="new-inventory__item-details">
        <h2 className="new-inventory__subtitle">Item Details</h2>
        <div className="new-inventory__container">
          <div className="new-inventory__name">
            <div className="new-inventory__form-header">Item Name</div>
            <div className="new-inventory__form">
              <input
                type="text"
                className="new-inventory__input"
                placeholder="Item Name"
              />
            </div>
          </div>

          <div className="new-inventory__description">
            <div className="new-inventory__form-header">Description</div>
            <div className="new-inventory__form">
              <input
                type="text"
                className="new-inventory__input new-inventory__input--description"
                placeholder="Please enter a brief item description..."
              />
            </div>
          </div>

          <div className="new-inventory__category">
            <div className="new-inventory__form-header">Category</div>
            <div className="new-inventory__form">
              <input
                type="text"
                className="new-inventory__input"
                placeholder="Please select"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="new-inventory__availablity">
        <h2 className="new-inventory__subtitle">Item Availablilty</h2>

        <div className="new-inventory__container">
          <div className="new-inventory__status">
            <div className="new-inventory__form-header">status</div>
          </div>

          <div className="new-inventory__quantity">
            <div className="new-inventory__form-header">Quantity</div>
            <div className="new-inventory__form">
              <input
                type="text"
                className="new-inventory__input"
                placeholder="0"
              />
            </div>
          </div>

          <div className="new-inventory__warehouse">
            <div className="new-inventory__form-header">Warehouse</div>
            <div className="new-inventory__form">
              <input
                type="text"
                className="new-inventory__input"
                placeholder="Please select"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="new-inventory__button">
        <button className="new-inventory__cancel">Cancel</button>
        <button className="new-inventory__add">Add Item</button>
      </div>
    </section>
  );
}

export default AddNewInventory;
