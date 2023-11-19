import { useParams } from "react-router-dom";
import "./details.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ReportDetails = () => {
  const replyText = useRef();
  const [report, setReport] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/issues/${id}`)
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(report);

  const handleReply = (id) => {
    const reply = replyText.current.value;
    console.log(reply);
    axios
      .post(`${import.meta.env.VITE_REACT_APP_API_URL}/issues/${id}/reply`, {
        reply,
        userId:report.userId,
        question:report.description
      })
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="details_wrapper">
      <h1>Report Details</h1>
      <div className="details">
        <p>
          {report.description} <br /> - {report.name}
        </p>
        <img src="/b.jpg" alt="" />
      </div>
      {report?.admin_replies?.length ? (
        report.admin_replies.map((reply, idx) => (
          <div className="reply_section" key={idx}>
            <div className="reply_wrapper">
            <div className="reply_img">
              <img src="/arrow.png" alt="arrow" />
            </div>
            <p>
              {reply.ans}
            </p>
            </div>
          </div>
        ))
      ) : (
        <div className="reply_section">
          <textarea ref={replyText}></textarea>
          <button onClick={() => handleReply(report._id)}>Reply</button>
        </div>
      )}
    </div>
  );
};

export default ReportDetails;
