

// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001/auth'; // La base de tu backend

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email: FormData.email,
      password: FormData.password
    });
    return response.data; // Retorna token, mensaje, etc.
  } catch (error) {
    throw error.response.data; // Podés manejar el error desde el componente
  }
};
