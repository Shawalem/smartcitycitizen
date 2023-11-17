import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ReportContext = createContext();

// eslint-disable-next-line react/prop-types
const DataContext = ({ children }) => {
  const [reports, setReport] = useState([]);
  const [refetch,Refetch] = useState(false)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/issues`)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err.message));
  }, [refetch]);

  const data = { reports,Refetch };
  return (
    <ReportContext.Provider value={data}>{children}</ReportContext.Provider>
  );
};

export default DataContext;
