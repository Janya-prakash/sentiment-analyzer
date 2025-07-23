# 🧠 Sentiment Analyzer App

A full-stack web application that analyzes the **sentiment** of user input using a Python FastAPI backend and a React frontend.

> Built by Janya Prakash as part of a software engineering internship task 🚀

---

## ✨ Features

- 🔍 **Real-time Sentiment Analysis** of text
- 🧠 Backend powered by `TextBlob` and `FastAPI`
- ⚛️ Frontend built using `React.js`
- 🔗 Seamless API integration between frontend and backend
- 💬 Simple UI to type any sentence and view sentiment
- 🚫 Handles network errors and empty inputs gracefully

---

## 📁 Project Structure
Sentiment App/
├── backend/
│ ├── main.py
│ └── requirements.txt
├── frontend/
│ ├── public/
│ ├── src/
│ │ └── App.js
│ └── package.json
├── README.md

---

## ⚙️ Tech Stack

| Layer       | Tech                  |
|-------------|------------------------|
| Frontend    | React.js               |
| Backend     | FastAPI, TextBlob      |
| Styling     | CSS                    |
| Deployment  | Render (backend), Vercel (frontend) *(optional)*

---

## 🚀 How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/YOUR_USERNAME/sentiment-analyzer.git
   cd sentiment-analyzer

2. **Start the backend (FastAPI)**
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload

3. **Start the frontend (React)**
   ```bash
   cd ../frontend
   npm install
   npm start

---

### 💡 How It Works

1. The React app takes text input from the user.
2. It sends the input to the FastAPI endpoint.
3. The backend uses TextBlob to determine sentiment: Positive, Negative, or Neutral.
4. The frontend displays the result to the user

📌 Screenshots
<img width="1917" height="885" alt="Sentiment Analyzer App " src="https://github.com/user-attachments/assets/bab1ecea-9ba4-449f-87d9-9e86136d660d" />

### 🛠️ Future Improvements

1. Add user history of analysis
2. Enhance UI/UX with Tailwind or Material UI
3. Add advanced NLP models like BERT or Vader

### 🧠 Author

Janya Prakash
B.Sc. Mathematics (Hons), University of Delhi
Aspiring Software Engineer | ML & AI Enthusiast

