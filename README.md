<h1 align="center">📝 Blog API – Node.js & Express</h1>

<p align="center"> 
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Framework-Express.js-lightgrey?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/API-RESTful-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Testing-Postman-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Render-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Week%209-Backend%20Project-purple?style=for-the-badge" /> 
</p> 

<p align="center">
  A <b>RESTful Blog API</b> built using <b>Node.js and Express</b> as part of 
  <b>Week 9 – Backend Development</b>.  
  This project demonstrates real-world backend concepts including 
  <b>CRUD operations, JWT authentication, middleware, error handling</b>, 
  and <b>API documentation using Postman</b>.  
  The API is deployed and publicly accessible for testing.
</p>

---

## 🚀 Live API  
🔗 **Base URL:**  [📝 Blog API](https://blog-api-alvb.onrender.com/)

🔍 **Health Check:**  https://blog-api-alvb.onrender.com/api/health

---

## 🎯 Project Features

- 🔐 User registration & login using JWT authentication  
- 📝 CRUD operations for blog posts  
- 💬 Comment system for posts  
- 🧱 Middleware for authentication, validation & logging  
- ⚠️ Centralized error handling  
- 🧪 API testing & documentation using Postman  
- 🌍 Deployed backend accessible via public URL  

---

## 🛠️ Technologies Used

- **Node.js**  
  *(Server-side JavaScript runtime)*  
- **Express.js**  
  *(REST API framework)*  
- **JWT (JSON Web Tokens)**  
  *(Authentication & authorization)*  
- **dotenv**  
  *(Environment variable management)*  
- **Postman**  
  *(API testing & documentation)*  
- **Render**  
  *(Cloud deployment platform)*  

---

## 🧠 How the API Works

1. Users authenticate via login/register endpoints
2. JWT token is generated and returned
3. Protected routes require a valid token
4. Blog posts support full CRUD operations
5. Comments can be added and removed
6. Middleware handles validation, auth & logging
7. Errors are handled globally
8. API is deployed and tested via Postman

---

## 🔐 Authentication Flow

- User logs in using `/api/auth/login`
- Server generates a JWT token
- Token must be sent in headers for protected routes
- Authorization: Bearer <JWT_TOKEN>

Protected routes:
- Create / Update / Delete posts
- Add / Delete comments

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

### Posts
- `GET /api/posts`
- `POST /api/posts` *(Protected)*
- `PUT /api/posts/:id` *(Protected)*
- `DELETE /api/posts/:id` *(Protected)*

### Comments
- `GET /api/comments`
- `POST /api/comments` *(Protected)*
- `DELETE /api/comments/:id` *(Protected)*

---

## 📂 Project Structure

```bash
blog-api/
│
├── server.js
├── package.json
├── README.md
├── .env.example
├── postman-collection.json
│
└── src/
    ├── controllers/
    │   ├── authController.js
    │   ├── postController.js
    │   └── commentController.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   ├── postRoutes.js
    │   └── commentRoutes.js
    │
    ├── data/
    │   └── posts.js
    │
    └── middleware/
        ├── auth.js
        ├── validate.js
        ├── errorHandler.js
        └── logger.js
```

---

## 🧪 API Testing

- All endpoints tested using Postman
- Requests saved and exported as:

```bash
postman-collection.json
```

- Collection included in the project root for easy import

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/saicharanjanagama/blog-api.git
cd blog-api
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file:
```bash
PORT=3000
JWT_SECRET=your_secret_key
```

4. Start server
```bash
npm run dev
```

---

## 📅 7-Day Development Plan

| Day   | Task                               |
| ----- | ---------------------------------- |
| Day 1 | Node.js setup & npm initialization |
| Day 2 | Express server & routing           |
| Day 3 | CRUD operations for posts          |
| Day 4 | JWT authentication                 |
| Day 5 | Validation & error handling        |
| Day 6 | Postman documentation              |
| Day 7 | Testing & deployment               |

---

## 📈 What This Project Demonstrates

- RESTful API design
- Backend authentication & authorization
- Middleware architecture
- Secure environment handling
- Real-world API testing workflow
- Cloud deployment experience

---

## 👨‍💻 Author

It’s me — **Sai Charan Janagama** 😄<br>
🎓 Computer Science Graduate | 🌐 Aspiring Full Stack Developer<br>
📧 [Email Me](saic89738@gmail.com) ↗<br>
🔗 [LinkedIn](https://www.linkedin.com/in/saicharanjanagama/) ↗<br>
💻 [GitHub](https://github.com/SaiCharanJanagama) ↗

---

## 💬 Feedback

If you have any feedback or suggestions, feel free to reach out!  
Your input helps me improve 🚀
