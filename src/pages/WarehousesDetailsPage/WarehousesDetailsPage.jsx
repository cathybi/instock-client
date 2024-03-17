import "./WarehousesDetailsPage.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InStockApi } from "../../utils/Util";
import SelectedWarehouse from "../../components/SelectedWarehouse/SelectedWarehouse";
import InventoryList from "../../components/InventoryList/InventoryList";

function WarehousesDetailsPage() {
  const [inventoryList, setInventoryList] = useState("");
  const [warehouseDetail, setWarehouseDetail] = useState("");
  const api = new InStockApi();
  const { warehouseId } = useParams();

  const initWarehouse = async (id) => {
    const warehouseDetail = await api.getWarehouseDetail(id);
    const inventoryList = await api.getWarehouseInventory(id);
    setWarehouseDetail(warehouseDetail);
    setInventoryList(inventoryList);
  };

  useEffect(() => {
    document.title = "Warehouses Details Page";
    initWarehouse(warehouseId);
  }, [warehouseId]);
  if (!selectedWarehouse) {
    return <div>Loading...</div>;
  }

  return (
    <div className="warehouses-details-page">
      <SelectedWarehouse warehouseDetail={warehouseDetail} />
      <InventoryList inventoryList={inventoryList} displayWarehouse={false} />
    </div>
  );
}

export default WarehousesDetailsPage;
