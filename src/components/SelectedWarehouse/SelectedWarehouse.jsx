import "./SelectedWarehouse.scss";

function SelectedWarehouse() {
  return (
    <section className="selected-warehouse">
      <h1 className="selected-warehouse__title">Washington</h1>

      <div className="selected-warehouse__informaion">
        <div className="selected-warehouse__address-container">
          <p className="selected-warehouse__subtitle">Warehouse address:</p>
          <p className="selected-warehouse__details">
            33 Pearl Street SW,Washington,USA
          </p>
        </div>
        <div className="selected-warehouse__contact-container">
          <div className="selected-warehouse__contact-name">
            <p className="selected-warehouse__subtitle">CONTACT NAME</p>
            <p className="selected-warehouse__details">Graeme Lyon</p>
            <p className="selected-warehouse__details">Warehouse Manager</p>
          </div>

          <div className="selected-warehouse__contact-info">
            <p className="selected-warehouse__subtitle">CONTACT INFORMATION</p>
            <p className="selected-warehouse__details">+1(647)504-0911</p>
            <p className="selected-warehouse__details">glyon@instock.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWarehouse;
