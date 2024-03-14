import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehousesDetailsPage from "./pages/WarehousesDetailsPage/WarehousesDetailsPage";
import AddEditInventory from "./components/AddEditInventory/AddEditInventory";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse";
import SelectedInventory from "./components/SelectedInventory/SelectedInventory";
import SelectedWarehouse from "./components/SelectedWarehouse/SelectedWarehouse";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouse" element={<WarehousesPage />} />
          <Route path="/warehousedetails" element={<WarehousesDetailsPage />} />
          <Route path="/inventory/add" element={<AddEditInventory />} />
          <Route path="/warehouse/add" element={<AddEditWarehouse />} />
          <Route
            path="/inventory/:inventoryId"
            element={<SelectedInventory />}
          />
          <Route
            path="/warehouse/:warehouseId"
            element={<SelectedWarehouse />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
