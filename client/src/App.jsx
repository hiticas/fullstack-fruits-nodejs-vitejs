import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
  try {
    const response = await axios.get("https://fullstack-fruits-nodejs-vitejs.vercel.app/api");
    console.log("Full response:", response); 

    setTitle(response.data.title || "");
    setSubtitle(response.data.subtitle || "");
    setArray(response.data.fruits || []);
  } catch (error) {
    console.error("Fetch error:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Status:", error.response.status);
    } else if (error.request) {
      console.error("No response received - likely CORS or network issue", error.request);
    } else {
      console.error("Axios setup error:", error.message);
    }
  }
};

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <p>
          {subtitle}
        </p>
        {array.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
            <br></br>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
