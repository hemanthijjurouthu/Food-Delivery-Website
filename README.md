# 🍔 Food Ordering Application

A complete full-stack food ordering system with separate interfaces for **Admin** and **Users**. It enables restaurant owners to manage food items and view orders, while customers can browse menus, add items to the cart, and make secure payments using Stripe.

---

## 📌 Project Structure


---

## 🧑‍🍳 Admin Panel (`food-delivery-admin`)

- 🥗 **Add Food Items**  
  Upload new food items with image, name, price, and description.

- 📃 **View Food List**  
  Manage and monitor all food items added by the admin.

- 📦 **View Orders**  
  See all customer orders with details like items ordered, customer info, and payment status.

---

## 🛒 Customer App (`food-delivery`)

- 🍽️ **Browse Menu**  
  Explore a list of food items available for ordering.

- ➕ **Add to Cart**  
  Easily add multiple items to the cart for purchase.

- 💳 **Checkout with Stripe**  
  Secure payment integration using Stripe for smooth and safe transactions.

- ✅ **Order Confirmation**  
  Receive confirmation after successful payment and order placement.

---

## ⚙️ Backend (`backend/`)

- Built with **Node.js** and **Express.js**
- Connects to **MongoDB** for data storage
- Handles:
  - Admin and User routes
  - Order and food item APIs
  - Stripe payment integration

---

## 💻 Tech Stack

| Technology      | Description                    |
|----------------|--------------------------------|
| **Frontend**    | React.js, Tailwind CSS         |
| **Backend**     | Node.js, Express.js            |
| **Database**    | MongoDB                        |
| **Payment**     | Stripe API                     |
| **Deployment**  | Vercel (Frontend), Render/Other (Backend) |

---


