import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehousesDetailsPage from "./pages/WarehousesDetailsPage/WarehousesDetailsPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse"
import EditWarehouse from "./components/EditWarehouse/EditWarehouse"
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DeleteInventory from "./components/DeleteInventory/DeleteInventory";
import DeleteWarehouse from "./components/DeleteWarehouse/DeleteWarehouse";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouse" element={<WarehousesPage />} />
          <Route path="/warehouse/add" element={< AddWarehouse/>} />
          <Route path="/warehouse/edit/:warehouseId" element={< EditWarehouse/>} />
          <Route path="/warehousedetails" element={<WarehousesDetailsPage />} />
          <Route path="/inventory/add" element={<AddEditInventory />} />
          <Route path="/inventory/:inventoryId" element={<InventoryDetailsPage />} />
          <Route path="/warehouse/:warehouseId" element={<WarehousesDetailsPage />} />
          <Route path="/inventory/deleteInventory" element={<DeleteInventory />} />
          <Route path="/warehouse/deleteWarehouse" element={<DeleteWarehouse />} />
          <Route path="/inventory/new" element={<AddNewInventoryPage />} />
          <Route path="/inventory/:inventoryId/edit" element={<EditInventoryPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
