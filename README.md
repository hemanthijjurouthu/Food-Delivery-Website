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

## 📽️ Demo

🎬 [Click here to watch the video demo](https://drive.google.com/file/d/1tH-5BSLaXIMGaaf-vvwayTKK_-HKDIpg/view?usp=drive_link)

> This demo walks through both the Admin Panel and the Customer App functionalities including food management, ordering, and Stripe payment integration.

## 🌐 Live Demo

Explore the live versions of the Food Delivery Application:

### 🛒 Customer Application  
[Click Here to Visit → Food Delivery for Customers](https://food-delivery-frontend-webiste.onrender.com)  
This is the user-facing application where customers can:
- View food items and details uploaded by the admin
- Browse the food menu by category
- Add items to their cart
- Place and track orders
- View order history

### 🛠️ Admin Dashboard  
[Click Here to Visit → Food Delivery Admin Panel](https://food-del-admin-iota.vercel.app)  
This is the admin-side application where the administrator can:
- Upload products with detailed specifications
- List and manage all available food items
- Track and manage orders placed by customers



