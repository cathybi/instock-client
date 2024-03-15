import AddNewInventory from "../../components/AddNewInventory/AddNewInventory";
import "./InventoryPage.scss";
import React from "react";
import InventoryList from "../../components/InventoryList/InventoryList";

const InventoryPage = () => {
  return (
    <div className="inventory-page">
      <AddNewInventory />
      <InventoryList />
    </div>
  );
};
export default InventoryPage;
