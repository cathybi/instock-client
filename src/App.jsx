import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InventoryPage from "./pages/InventoryPage/InventoryPage"
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage"
import AddEditInventory from "./components/AddNewInventory/AddNewInventory"
import AddEditWarehouse from "./components/AddNewWarehouse/AddNewWarehouse"
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
      <Route path="/inventory/add" element={< AddEditInventory/>} />
      <Route path="/warehouse/add" element={< AddEditWarehouse/>} />
      <Route path="/inventory/:inventoryId" element={< SelectedInventory/>} />
      <Route path="/warehouse/:warehouseId" element={< SelectedWarehouse/>} />
      
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
