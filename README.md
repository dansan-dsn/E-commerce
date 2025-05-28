# 🛍️ E-Commerce Application

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Material UI](https://img.shields.io/badge/Material_UI-5.14-007FFF?logo=mui)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs)
![Mongoose](https://img.shields.io/badge/Mongoose-7.0-880000?logo=mongodb)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A full-featured e-commerce platform with React frontend and Node.js backend powered by MongoDB.

![E-Commerce App Preview](https://via.placeholder.com/800x400/2D3748/FFFFFF?text=E-Commerce+App+Preview)  
*(Replace with actual screenshot)*

## ✨ Features

### 🛒 Product Management
- Product catalog with categories and filters
- High-resolution image galleries
- Product variations (size, color, etc.)
- Inventory tracking with low-stock alerts

### 👤 User System
- Secure authentication (JWT)
- User profiles with order history
- Role-based access (Customer, Admin, Vendor)
- Wishlist functionality

### 🔍 Shopping Experience
- Advanced product search
- Personalized recommendations
- Product reviews and ratings
- Recently viewed items

### 💳 Payment & Checkout
- Multi-step checkout process
- Multiple payment gateways (Stripe, PayPal)
- Coupon/discount system
- Order tracking

### ⚡ Tech Stack
- **Frontend**: React 18 + Material UI 5
- **State Management**: Redux Toolkit
- **Backend**: Node.js + Express + Mongoose (MongoDB)
- **Payments**: Stripe API integration
- **Type-safe**: TypeScript on both frontend and backend

## 🛠️ Setup

### Prerequisites
- Node.js `v18+`
- npm `v9+` or yarn `v1.22+`
- MongoDB Atlas account or local MongoDB
- Git
- Stripe account (for payments)

### Frontend Installation
```bash
# Clone repository
git clone https://github.com/dansan-dsn/e-commerce.git
cd e-commerce/client

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Installation
```bash
cd ../server

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Start development server
npm run dev
