import axios from 'axios';

const token = localStorage.getItem("@opr/token") || "no token";

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

export const apiAuth = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		"Authorization": `Bearer ${token}`
	}
});