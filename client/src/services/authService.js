// src/services/authService.js

const API = import.meta.env.VITE_API_URL + "/auth";

// ===== USER =====
export const loginUser = async (data) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      role: "user",
    }),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};

export const registerUser = async (data) => {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      role: "user",
    }),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};

// ===== HOSPITAL =====
export const loginHospital = async (data) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      role: "hospital",
    }),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};

export const registerHospital = async (data) => {
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      role: "hospital",
    }),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};