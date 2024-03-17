import "./SelectedWarehouse.scss";
import editIcon from "../../assets/icons/edit_white-24px.svg";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

function SelectedWarehouse({ warehouseDetail }) {
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
            {warehouseDetail.warehouse_name}
          </h1>
        </div>

        <div className="selected-warehouse__edit">
          <Link
            className="selected-warehouse__link selected-warehouse__link-edit"
            to="/"
          >
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
          <div className="selected-warehouse__address-group">
            <p className="selected-warehouse__details">
              {warehouseDetail.address},
            </p>
            <p className="selected-warehouse__details">
              {warehouseDetail.city}, {warehouseDetail.country}
            </p>
          </div>
        </div>
        <div className="selected-warehouse__contact-container">
          <div className="selected-warehouse__contact-name">
            <p className="selected-warehouse__subtitle">CONTACT NAME:</p>
            <p className="selected-warehouse__details">
              {warehouseDetail.contact_name}
            </p>
            <p className="selected-warehouse__details">
              {warehouseDetail.contact_position}
            </p>
          </div>

          <div className="selected-warehouse__contact-info">
            <p className="selected-warehouse__subtitle">CONTACT INFORMATION:</p>
            <p className="selected-warehouse__details">
              {warehouseDetail.contact_phone}
            </p>
            <p className="selected-warehouse__details">
              {warehouseDetail.contact_email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWarehouse;
