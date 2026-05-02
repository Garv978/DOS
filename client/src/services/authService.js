// src/services/authService.js

const BASE = import.meta.env.VITE_API_URL;

// ===== LOGIN =====
export const loginUser = async (data) => {
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data), // ❌ removed role
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);

  return result;
};

export const loginHospital = loginUser; // same endpoint now

// ===== REGISTER =====
export const registerUser = async (data) => {
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      ...data,
      role: "user", // ✅ keep here
    }),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);

  return result;
};

export const registerHospital = async (data) => {
  const res = await fetch(`${BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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

export const logoutUser = async () => {
  const res = await fetch(`${BASE}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Logout failed");

  return res.json();
};

// ===== AUTH CHECK =====
export const getMe = async () => {
  const res = await fetch(`${BASE}/auth/me`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Not authenticated");

  return res.json();
};