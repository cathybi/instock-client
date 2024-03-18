import "./InventoryList.scss"
import React, { useRef } from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import rightIcon from "../../assets/icons/chevron_right-24px.svg";
import DeleteInventory from "../DeleteInventory/DeleteInventory.jsx";

function InventoryList({ warehouseId, inventoryList, displayWarehouse, initInventoryList}) {
    const searchRef = useRef();
    const navigate  = useNavigate();

    //Added state Variables for delete functionality   
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [inventoryToDelete, setInventoryToDelete] = useState({});    

    function handleSearch(event) {
        event.preventDefault();
        if (event.key === 'Enter' || event.keyCode === 13) {
            let searchQuery = searchRef.current.value.trim();
            console.log("Search string is: ", searchQuery);
        }
    }

    function handleAddItem(event) {
        event.preventDefault();
        navigate("/inventory/add");
    } 

    function closeModal() {
        setShowDeleteModal(false);
        initInventoryList ();
    } 

    function handleDelete(inventoryObject) {
        setShowDeleteModal(true);
        setInventoryToDelete(inventoryObject);
    }

    return (
        <div className={displayWarehouse ? "inventory overlap" : "inventory overlap-disable"}>
            {
                displayWarehouse && (
                    <form className="inventory__form">
                        <h1 className="inventory__header">Inventory</h1>
                        <div key="999" className="inventory__header-right">
                            <input className="inventory__input" type="text" id="search" name="search" onKeyUp={handleSearch} placeholder="Search..." ref={searchRef} />
                            <button className="inventory__button" onClick={handleAddItem}>+ Add New Item</button>
                        </div>
                    </form>
                )
            }

            <ul className="inventory__list">
                <li key="0" className="inventory__tablet-li">
                    <div className="inventory__tablet-sectionwraper">
                        <div className="inventory__tablet-section--left">
                            <div className="inventory__tablet-column">
                                <h4 className="inventory__tablet-header">INVENTORY ITEM</h4>
                                <img className="inventory__tablet-icon" alt="sort icon" src={sortIcon} />
                            </div>
                            <div className="inventory__tablet-column">
                                <h4 className="inventory__tablet-header">CATEGORY</h4>
                                <img className="inventory__tablet-icon" alt="sort icon" src={sortIcon} />
                            </div>
                        </div>
                        <div className={displayWarehouse ? "inventory__tablet-section--right" : "inventory__tablet-section--right2"}>
                            <div className="inventory__tablet-column">
                                <h4 className="inventory__tablet-header inventory__tablet-header--status">STATUS</h4>
                                <img className="inventory__tablet-icon" alt="sort icon" src={sortIcon} />
                            </div>
                            <div className="inventory__tablet-column">
                                <h4 className="inventory__tablet-header inventory__tablet-header--qty">QTY</h4>
                                <img className="inventory__tablet-icon" alt="sort icon" src={sortIcon} />
                            </div>
                            {displayWarehouse && (<div className="inventory__tablet-column">
                                <h4 className="inventory__tablet-header">WAREHOUSE</h4>
                                <img className="inventory__tablet-icon" alt="sort icon" src={sortIcon} />
                            </div>)}
                        </div>
                    </div>
                    <div className="inventory__tablet-action">
                        <h4 className="inventory__tablet-header">ACTIONS</h4>
                    </div>
                </li>

                {
                    inventoryList &&
                    inventoryList
                        .map((inventory, index) => (
                            <div key={inventory.id}>
                                {index !== 0 && <hr className="inventory__line" />}
                                <li  className="inventory__li">
                                    <div className="inventory__sectionwraper">
                                        <div className="inventory__section--left">
                                            <div className="inventory__column">
                                                <h4 className="inventory__item-header">INVENTORY ITEM</h4>
                                                <Link className="inventory__item-link" to={`/inventory/${inventory.id}`}>
                                                    <div className="inventory__item--blue">{inventory.item_name}</div>
                                                    <img className="inventory__item-icon" alt="right icon" src={rightIcon} />
                                                </Link>
                                            </div>
                                            <div className="inventory__column">
                                                <h4 className="inventory__item-header">CATEGORY</h4>
                                                <div className="inventory__category">{inventory.category}</div>
                                            </div>
                                        </div>

                                        <div className={displayWarehouse ? "inventory__section--right" : "inventory__section--right2"}>
                                            <div className="inventory__column">
                                                <h4 className="inventory__item-header">STATUS</h4>
                                                <div className={inventory.status === "In Stock" ? "inventory__status inventory__in-stock" : "inventory__status inventory__out-of-stock"}>
                                                    {inventory.status.toUpperCase()}
                                                </div>
                                            </div>
                                            <div className="inventory__column">
                                                <h4 className="inventory__item-header">QTY</h4>
                                                <div className="inventory__qty">{inventory.quantity}</div>
                                            </div>
                                            {
                                                displayWarehouse && (
                                                    <div className="inventory__column">
                                                        <h4 className="inventory__item-header">WAREHOUSE</h4>
                                                        <div className="inventory__warehouse">{inventory.warehouse_name}</div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <div className="inventory__actions">
                                        <img src={deleteIcon} alt="delete icon" 
                                         onClick={() => handleDelete({id:inventory.id, name:inventory.item_name})}  />
                                        <Link to={`/inventory/${inventory.id}/edit/`}>
                                            <img src={editIcon} alt="edit icon" />
                                        </Link>
                                    </div>
                                </li >
                            </div>
                        ))
                }
            </ul>

            <DeleteInventory isOpen={showDeleteModal}
                onRequestClose={closeModal}
                inventoryToDelete={inventoryToDelete}
            />

        </div >
    );
}

export default InventoryList;