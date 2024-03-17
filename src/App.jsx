import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehousesDetailsPage from "./pages/WarehousesDetailsPage/WarehousesDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import AddNewInventoryPage from "./pages/AddNewInventoryPage/AddNewInventoryPage";
import AddEditWarehouse from "./components/AddEditWarehouse/AddEditWarehouse";
import SelectedInventory from "./components/SelectedInventory/SelectedInventory";
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

          <Route path="/inventory/new" element={<AddNewInventoryPage />} />
          <Route
            path="/inventory/:inventoryId/edit"
            element={<EditInventoryPage />}
          />

          <Route path="/warehouse/add" element={<AddEditWarehouse />} />

          <Route
            path="/inventory/:inventoryId"
            element={<InventoryDetailsPage />}
          />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehousesDetailsPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
