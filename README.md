# TaskZen - Full Stack TODO Application

A modern, full-stack TODO application built with React, Node.js/Express, and MongoDB. Features a clean, responsive UI with vanilla CSS and a RESTful API backend.

![TaskMaster Application](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)

## ✨ Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Real-time task counter
- Responsive design with modern UI
- Smooth animations and transitions
- MongoDB persistence
- RESTful API architecture

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool and dev server
- **Axios** 1.13.2 - HTTP client
- **Vanilla CSS** - Styling (no framework dependencies)

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
TODO/
├── frontend/                # React frontend application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── App.jsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # Application entry point
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
│
├── backend/                # Express backend API
│   ├── models/
│   │   └── Todo.js         # Mongoose Todo model
│   ├── server.js           # Express server & API routes
│   ├── viewTodos.js        # Helper script to view DB data
│   └── package.json        # Backend dependencies
│
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (running locally on port 27017) - [Download](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhivakar2005/TaskZen.git
   cd TaskZen
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Ensure MongoDB is running**
   ```bash
   # On Windows (Command Prompt or PowerShell)
   net start MongoDB
   
   # Or if MongoDB is not a service, run:
   mongod
   ```
   
## ▶️ Running the Application

### Start the Backend Server

```bash
cd backend
node server.js
```

The backend will start on **http://localhost:5000**

You should see:
```
Server running on port 5000
MongoDB connected
```

### Start the Frontend Dev Server

Open a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start on **http://localhost:3000**

### Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## 📡 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/todos` | Get all todos |
| `POST` | `/todos` | Create a new todo |
| `PUT` | `/todos/:id` | Update a todo (toggle completion) |
| `DELETE` | `/todos/:id` | Delete a todo |

### Example API Calls

**Create a Todo:**
```bash
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries"}'
```

**Get All Todos:**
```bash
curl http://localhost:5000/todos
```

**Update a Todo:**
```bash
curl -X PUT http://localhost:5000/todos/<todo_id> \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

**Delete a Todo:**
```bash
curl -X DELETE http://localhost:5000/todos/<todo_id>
```

## 🗄️ Database Schema

### Todo Model

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Unique identifier (auto-generated) |
| `title` | String | Todo title/description |
| `completed` | Boolean | Completion status (default: false) |
| `createdAt` | Date | Creation timestamp (auto-generated) |
| `__v` | Number | Version key (Mongoose) |

## 🔧 Helper Scripts

### View MongoDB Data

To view all todos stored in the database:

```bash
cd backend
node viewTodos.js
```

Sample output:
```
=== TODOS IN DATABASE ===

1. ✓ Complete project documentation
   ID: 694bab94e20494de72e07321
   Completed: true
   Created: Tue Dec 24 2025 14:36:49 GMT+0530

2. ○ Deploy to production
   ID: 694babafe20494de72e07322
   Completed: false
   Created: Tue Dec 24 2025 14:37:15 GMT+0530

Total: 2 todo(s)
```

## 🎨 UI Features

- **Gradient backgrounds** for visual appeal
- **Smooth animations** for adding/removing todos
- **Hover effects** on interactive elements
- **Loading states** with spinner animation
- **Empty state** with helpful message
- **Delete on hover** for better UX
- **Responsive design** works on all screen sizes

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
