import "./reports.scss";
import { useContext, useEffect } from "react";
import { ReportContext } from "../../../contexts/DataContext";
import axios from "axios";
import {Link} from 'react-router-dom'

const Reports = () => {
  const {reports,Refetch} = useContext(ReportContext)
  useEffect(()=>{
    Refetch(prev=> !prev)
  },[Refetch])
  const handleDelete = (id)=>{

    axios.delete(`${import.meta.env.VITE_REACT_APP_API_URL}/issues/${id}`)
    .then(()=>{
      Refetch(prev=> !prev)
    })
    .catch(err => console.log(err))

  }
  return (
    <div className="reports_wrapper">
      <h1>View Reports</h1>
      <div className="list">
        <div className="list_head">
          <div className="user">
            <h5>User</h5>
          </div>
          <div className="email">
            <h5>Email</h5>
          </div>
          <div>
            <h5>Category</h5>
          </div>
          <div>
            <h5>Status</h5>
          </div>
          
          <div>
            <h5>Action</h5>
          </div>
        </div>
        <div className="list_body">
          {reports.map((issue) => (
            <div className="report" key={issue._id}>
              <div className="name">{issue.name}</div>
              <div className="email">{issue.email}</div>
              <div>{issue.category}</div>
              <div>{issue.status}</div>
              <div className="action_btn">
                <Link to={`/details/${issue._id}`}>View</Link> <button onClick={()=>handleDelete(issue._id)}>delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
