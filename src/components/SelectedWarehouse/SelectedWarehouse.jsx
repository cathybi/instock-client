import "./SelectedWarehouse.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import editIcon from "../../assets/icons/edit-24px.svg";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function SelectedWarehouse(props) {
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
          <h1 className="selected-warehouse__title">
            {props.selectedWarehouse.warehouse_name}
          </h1>
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
            {props.selectedWarehouse.address}
          </p>
          <p className="selected-warehouse__details">
            {props.selectedWarehouse.city}
          </p>
          <p className="selected-warehouse__details">
            {props.selectedWarehouse.country}
          </p>
        </div>
        <div className="selected-warehouse__contact-container">
          <div className="selected-warehouse__contact-name">
            <p className="selected-warehouse__subtitle">CONTACT NAME:</p>
            <p className="selected-warehouse__details">
              {props.selectedWarehouse.contact_name}
            </p>
            <p className="selected-warehouse__details">
              {props.selectedWarehouse.contact_position}
            </p>
          </div>

          <div className="selected-warehouse__contact-info">
            <p className="selected-warehouse__subtitle">CONTACT INFORMATION</p>
            <p className="selected-warehouse__details">
              {props.selectedWarehouse.contact_phone}
            </p>
            <p className="selected-warehouse__details">
              {props.selectedWarehouse.contact_email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWarehouse;
