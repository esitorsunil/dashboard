# Multi-Page Dashboard

## 🚀 Features Overview

This project showcases a complete React application with advanced routing and UI techniques using `react-router-dom`.

### 🌐 Core Pages & Navigation
- Basic pages implemented: **Home**, **About**, and **Contact**.
- Responsive **Navigation Bar** using `NavLink` or `Link` for seamless page switching.
- Active route is visually **highlighted** for clear navigation context.

### ❌ 404 Page
- Includes a **catch-all route** to display a user-friendly **"Page Not Found"** message for invalid URLs.

### 🔐 Authentication & Route Protection
- Mock **Login page** implemented with basic form validation.
- Upon login, users are **redirected to the Dashboard**.
- Protected routing ensures only authenticated users can access `/dashboard` and its sub-pages.
- Unauthenticated users are automatically redirected to `/login`.

### 🧭 Nested Routing
- Dashboard layout includes the following nested sub-pages:
  - `/dashboard/profile`
  - `/dashboard/settings`
  - `/dashboard/reports`
- Nested routes rendered via `Outlet` for modular and organized component structure.

### 🔄 URL Parameters & Dynamic Routing
- A **UserList page** lists users and supports dynamic routing via:
  - `/users/:id` to view individual user details based on URL parameters.

### 📦 Programmatic Navigation
- Used `useNavigate()` to redirect users after login and form submissions dynamically.

### 🔐 Protected Routes
- Implemented mock authentication logic to **guard routes** from unauthenticated access.

### 🔍 Query Parameters
- Handled query strings (e.g., `?sort=name`) to demonstrate **query parameter reading and display**.

### ⚡ Lazy Loading
- Heavy components like the **Reports** page are **code-split and lazy-loaded** with `React.lazy()` and `Suspense`.

### 🧭 Breadcrumb Navigation
- Breadcrumbs update in real time to reflect the **current route path**, enhancing user orientation.

### 🖱️ Scroll Restoration
- Scroll position is preserved when navigating back to previously visited routes using `useLocation` and state tracking.

---

This project serves as a solid boilerplate for building modern, scalable, and user-friendly React applications with a strong routing foundation.
