import { useParams } from 'react-router-dom'
import './details.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ReportDetails = () => {
  const [report, setReport] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}/issues/${id}`)
    .then((res)=>{
      setReport(res.data)
    })
    .catch(err => console.log(err))
  },[id])
  console.log(report);
  return (
    <div className='details_wrapper'>
      <h1>Report Details</h1>
      <div className='details'>
          <p>{report.description} <br /> - {report.name}</p>
          <img src="/b.jpg" alt="" />
      </div>
    </div>
  )
}

export default ReportDetails