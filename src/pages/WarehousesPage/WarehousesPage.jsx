import "./WarehousesPage.scss";
import React from 'react';  
import WarehousesList from "./../../components/WarehousesList/WarehousesList.jsx";

const WarehousesPage = () => {
  return (
    <div className="warehouse-page">
      <WarehousesList />
    </div>
  );
};

export default WarehousesPage;