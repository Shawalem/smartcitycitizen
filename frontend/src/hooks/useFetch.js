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

  return { data, isLoading, error,count };
};


export default useFetch;
