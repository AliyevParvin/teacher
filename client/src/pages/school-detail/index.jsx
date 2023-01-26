import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
const SchoolDetail = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/schools/${id}`).then((res) => {
      setTeacher(res.data);
    });
  }, []);
  const handleDelete = () => {
    axios.delete(`http://localhost:8000/schools/${id}`);
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AddSchool</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="card" key={teacher._id}>
        <div className="forImg">
          <img src={teacher.profil} alt="" />
        </div>
        <div>
          <h1>{teacher.name}</h1>
          <p className="subject">{teacher.subject}</p>
          <p>{teacher.description}</p>
          <p>{teacher.salary}$</p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: "red",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SchoolDetail;
