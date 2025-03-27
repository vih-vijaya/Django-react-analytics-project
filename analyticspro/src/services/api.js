import axios from "axios";

export const uploadFile = (formData) => axios.post(`http://127.0.0.1:8000/api/business/upload/`, formData);
export const getBusinessStats = () => axios.get(`http://127.0.0.1:8000/api/business/business/stats/`);
export const getUsaCompanies = () => axios.get(`http://127.0.0.1:8000/api/business/business/USA/`);
export const getHighProfitCompanies = () => axios.get(`http://127.0.0.1:8000/api/business/business/profit/`);
export const getHighRevenueCompanies = () => axios.get(`http://127.0.0.1:8000/api/business/business/high_revenue/`);
export const getTotalProfit = () => axios.get(`http://127.0.0.1:8000/api/business/business/total_profit/`);
export const addCompany = (data) => axios.post(`http://127.0.0.1:8000/api/business/business/AddCompany/`, data);
export const getHighestProfitByCountry = () => axios.get("http://127.0.0.1:8000/api/business/business/HighestProfitByCountry/");
