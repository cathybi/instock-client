import "./InventoryPage.scss";
import React from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

const InventoryPage = () => {
  return (
    <div className="inventory-page">
      <InventoryList />
    </div>
  );
};
export default InventoryPage;
