import axios from "axios";

export class InStockApi {
  constructor() {
    this.baseUrl = "http://localhost:5050";
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async deleteWarehouse(warehouseId) {
    try {
      const response = await this.axios.delete("/api/warehouses/"+warehouseId);
      return response;
    } catch (error) {
      throw new Error("Failed to delete warehouse: " + error.message);
    }
  }

  async deleteInventory(inventoryId) {
    try {
      const response = await this.axios.delete("/api/inventories/"+inventoryId);
      return response;
    } catch (error) {
      throw new Error("Failed to delete warehouse: " + error.message);
    }
  }

  async getInventoryList() {
    try {
      const response = await this.axios.get("/api/inventories");
      return response.data;
    } catch (error) {
      throw new Error("Failed to get inventory list: " + error.message);
    }
  }
  async addInventory(newInventory){
    try {
      const response = await this.axios.post(`/api/inventories/`,newInventory);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update warehouse: " + error.message);
    }
  }
  async updateInventory(inventoryId, inventoryData) {
    try {
      const response = await this.axios.put(`/api/inventories/${inventoryId}`, inventoryData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get inventory list: " + error.message);
    }
  }

  async getwarehousesList() {
    try {
      const response = await this.axios.get("/api/warehouses");
      return response.data;
    } catch (error) {
      throw new Error("Failed to get Warehouse list: " + error.message);
    }
  }

  async getInventoryDetail(inventoryId) {
    try {
      const response = await this.axios.get("/api/inventories/" + inventoryId);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get inventory item: " + error.message);
    }
  }
  async updateWarehouse (id,updatedWarehouse){
    try {
      const response = await this.axios.patch(`/api/warehouses/${id}`,updatedWarehouse);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update warehouse: " + error.message);
    }
  }
  async addWarehouse (newWarehouse){
    try {
      await this.axios.post(`/api/warehouses/`,newWarehouse);
    } catch (error) {
      throw new Error("Failed to update warehouse: " + error.message);
    }
  }

  async getWarehouseDetail(id) {
    try {
      const response = await this.axios.get("/api/warehouses/" + id);
      return response.data;
    } catch (error) {
      throw new Error("Failed to get warehouse info: " + error.message);
    }
  }

  async getWarehouseInventory(id) {
    try {
      const response = await this.axios.get("/api/warehouses/" + id + "/inventories");
      return response.data;
    } catch (error) {
      throw new Error("Failed to get warehouse info: " + error.message);
    }
  }
}