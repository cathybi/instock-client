import "./InventoryPage.scss"
import React from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';


function InventoryPage() {
    return (
        <div className="inventory-page">
            <InventoryList />
        </div>
    );
}

export default InventoryPage;