import "./WarehousesDetailsPage.scss";
import SelectedWarehouse from "../../components/SelectedWarehouse/SelectedWarehouse";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InStockApi } from "../../utils/Util";

function WarehousesDetailsPage() {
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const { warehouseId } = useParams();

  const api = new InStockApi();

  useEffect(() => {
    async function fetchSelectedWarehouse(id) {
      try {
        const warehouseInfo = await api.fetchSelectedWarehouse(id);
        setSelectedWarehouse(warehouseInfo);
      } catch (error) {
        console.error("Error fetching warehouse details", error);
      }
    }
    if (warehouseId) {
      fetchSelectedWarehouse(warehouseId);
    }
  }, [warehouseId]);

  if (!selectedWarehouse) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Warehouses-Details-Page">
      <SelectedWarehouse selectedWarehouse={selectedWarehouse} />
    </div>
  );
}

export default WarehousesDetailsPage;
