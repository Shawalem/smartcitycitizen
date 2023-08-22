import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [count,setCount] = useState(0)
  const [error, setError] = useState(null);

  const request = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
      Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await request.get(url);
        setData(res.data.data);
        setCount(res.data.data.length)
        
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    
    fetchData();
  }, [url]);

  const registerUser = async (config) => {
    setIsLoading(true);
    try {
      const response = await request.post(config);
      registerUser(response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const loginUser = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await request.post("/auth/local", credentials);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, registerUser, loginUser,count };
};


export default useFetch;
