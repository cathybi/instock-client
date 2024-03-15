import axios from "axios";

export class InStockApi {
  constructor() {
    this.baseUrl = "http://localhost:5050";
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  async getInventoryList() {
    try {
      const response = await this.axios.get("/api/inventories");
      return response.data;
    } catch (error) {
      throw new Error("Failed to get inventory list: " + error.message);
    }
  }

  async fetchSelectedWarehouse(id) {
    try {
      const response = await this.axios.get(`/api/warehouses/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching warehouse details" + error.message);
    }
  }
}
