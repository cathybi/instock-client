import "./SelectedWarehouse.scss";
import editIcon from "../../assets/icons/edit-24px.svg";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import React from "react";
import { Link } from "react-router-dom";

function SelectedWarehouse() {
  return (
    <section className="selected-warehouse">
      <div className="selected-warehouse__nav">
        <div className="selected-warehouse__back">
          <Link className="selected-warehouse__link" to="/">
            <img
              src={arrowBack}
              alt="arrow back"
              className="selected-warehouse__arrowIcon"
            />
          </Link>
          <h1 className="selected-warehouse__title">Washington</h1>
        </div>

        <div className="selected-warehouse__edit">
          <Link className="selected-warehouse__link" to="/">
            <img
              src={editIcon}
              alt="edit icon"
              className="selected-warehouse__editIcon"
            />
          </Link>
        </div>
      </div>

      <div className="selected-warehouse__informaion">
        <div className="selected-warehouse__address-container">
          <p className="selected-warehouse__subtitle">WAREHOUSE ADDRESS:</p>
          <p className="selected-warehouse__details">
            33 Pearl Street SW, Washington, USA
          </p>
        </div>
        <div className="selected-warehouse__contact-container">
          <div className="selected-warehouse__contact-name">
            <p className="selected-warehouse__subtitle">CONTACT NAME:</p>
            <p className="selected-warehouse__details">Graeme Lyon</p>
            <p className="selected-warehouse__details">Warehouse Manager</p>
          </div>

          <div className="selected-warehouse__contact-info">
            <p className="selected-warehouse__subtitle">CONTACT INFORMATION:</p>
            <p className="selected-warehouse__details">+1(647) 504-0911</p>
            <p className="selected-warehouse__details">glyon@instock.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWarehouse;
