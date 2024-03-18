import "./WarehousesDetailsPage.scss";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { InStockApi } from "../../utils/Util";
import SelectedWarehouse from "../../components/SelectedWarehouse/SelectedWarehouse";
import InventoryList from '../../components/InventoryList/InventoryList';

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

  const initInventoryList = async (id) => {
    const inventoryList = await api.getInventoryList();
    setInventoryList(inventoryList);
};

  useEffect(() => {
    document.title = 'Warehouses Details Page';
    initWarehouse(warehouseId);
  }, [warehouseId]);

  return (
    <div className="warehouses-details-page">
      <SelectedWarehouse warehouseDetail={warehouseDetail}/>
      <InventoryList warehouseId={warehouseId} inventoryList={inventoryList} displayWarehouse={false} initInventoryList={initInventoryList}/>
    </div>
  );
}

export default WarehousesDetailsPage;