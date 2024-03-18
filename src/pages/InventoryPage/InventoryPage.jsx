import "./InventoryPage.scss"
import React, { useState, useEffect } from 'react';
import { InStockApi } from "../../utils/Util";
import InventoryList from '../../components/InventoryList/InventoryList';


function InventoryPage() {
    const [inventoryList, setInventoryList] = useState("");
    const api = new InStockApi();

    const initInventoryList = async (id) => {
        const inventoryList = await api.getInventoryList();
        setInventoryList(inventoryList);
    };

    useEffect(() => {
        document.title = 'Inventory';
        initInventoryList();
    }, []);

    return (
        <div className="inventory-page">
            <InventoryList warehouseId={null}
                        inventoryList={inventoryList} 
                          displayWarehouse={true}
                          initInventoryList={initInventoryList}/>
        </div>
    );
}

export default InventoryPage;