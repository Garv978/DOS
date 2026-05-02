// src/services/authService.js

const BASE = import.meta.env.VITE_API_URL;

// ===== USER =====
export const loginUser = async (data) => {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔥 IMPORTANT
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
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
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
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      ...data,
      role: "hospital",
    }),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);

  return result;
};

// ===== AUTH CHECK =====
export const getMe = async () => {
  const res = await fetch(`${BASE}/auth/me`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Not authenticated");

  return res.json();
};

// ===== LOGOUT =====
export const logoutUser = async () => {
  await fetch(`${BASE}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
};