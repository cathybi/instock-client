import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehousesDetailsPage from "./pages/WarehousesDetailsPage/WarehousesDetailsPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import AddNewInventoryPage from "./pages/AddNewInventoryPage/AddNewInventoryPage";
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
          <Route path="/inventory/:inventoryId" element={<InventoryDetailsPage />} />
          <Route path="/inventory/add" element={<AddNewInventoryPage />} />
          <Route path="/inventory/:inventoryId/edit" element={<EditInventoryPage />}/>

          <Route path="/warehouse" element={<WarehousesPage />} />
          <Route path="/warehouse/:warehouseId" element={<WarehousesDetailsPage />} />
          <Route path="/warehouse/add" element={< AddWarehouse/>} />
          <Route path="/warehouse/:warehouseId/edit/" element={< EditWarehouse/>} />

          <Route path="/inventory/deleteInventory" element={<DeleteInventory />} />
          <Route path="/warehouse/deleteWarehouse" element={<DeleteWarehouse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
