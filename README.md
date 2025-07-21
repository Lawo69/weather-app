# 🌦️ Weather App

This is a full-stack weather application built with:

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express (API & caching)
- **Authentication**: Auth0

---

## 📁 Project Structure

- frontend/ # React frontend app
- backend/ # Node backend (Express)

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)
- An Auth0 account and application

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 3️⃣ Install Dependencies

```bash
# Install root dependencies (includes dev tools)
npm install

# Install frontend (client) dependencies
cd frontend
npm install

# Install backend (server) dependencies
cd backend
npm install
```

### 4️⃣ Environment Variables

📌 Frontend: frontend/.env,local
```bash
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-client-id
PORT=5173
```
📌 Backend: backend/.env
```bash
PORT=3001
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
```

### 5️⃣ Run the App

Frontend
```bash
cd frontend
npm run dev
```

Backend
```bash
cd server
npm run dev
```

## 📄 License
MIT License – © 2025 Your Name

---

### 🛠️ Bonus: Root `package.json` (for `npm run dev`)

Add this to the **root `package.json`**:

```json
{
  "name": "weather-app",
  "private": true,
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix client\" \"npm run dev --prefix server\""
  },
  "devDependencies": {
    "concurrently": "^8.0.1"
  }
}
```
