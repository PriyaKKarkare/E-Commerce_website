import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/test");
        setMessage(response.data.message);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    fetchData();
  }, [])

  return (
    <div>
      <h1>E-Commerce Application</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App
