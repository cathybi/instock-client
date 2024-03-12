import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InventoryPage from "./pages/InventoryPage/InventoryPage"
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage"
import AddNewInventory from "./components/AddNewInventory/AddNewInventory"
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse"
import EditInventory from "./components/EditInventory/EditInventory"
import SelectedInventory from "./components/SelectedInventory/SelectedInventory"
import SelectedWarehouse from "./components/SelectedWarehouse/SelectedWarehouse"

function App() {
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>

      <Route path="/inventory" element={< InventoryPage/>} />
      <Route path="/warehouse" element={< WarehousesPage/>} />
      <Route path="/inventory/add" element={< AddNewInventory/>} />
      <Route path="/warehouse/add" element={< AddNewWarehouse/>} />
      <Route path="/inventory/:id/edit" element={< EditInventory/>} />
      <Route path="/inventory/:inventoryId" element={< SelectedInventory/>} />
      <Route path="/warehouse/:warehouseId" element={< SelectedWarehouse/>} />
      
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
