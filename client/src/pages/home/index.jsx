import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import {Helmet} from "react-helmet";
const HomePage = () => {
  const [teachers, setTeachers] = useState([]);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8000/schools").then((res) => {
      setTeachers(res.data);
    });
  }, []);
  const sortBySalary = () => {
    toggle
      ? setTeachers([...teachers.sort((a, b) => a.salary - b.salary)])
      : axios.get("http://localhost:8000/schools").then((res) => {
          setTeachers(res.data);
        });
    setToggle(!toggle);
  };
  const handleSearch = (a) => {
    axios.get("http://localhost:8000/schools").then((res) => {
      let newArr = res.data.filter((e) =>
      e.name.toLowerCase().includes(a.target.value.toLowerCase())
    );
    setTeachers(newArr);
    });
  
  };
  return (
    <div id="home">
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container">
        <div id="first-section">
          <div>
            <h1>Learn From The Expert</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              ipsa nulla sed quis rerum amet natus quas necessitatibus.
            </p>
            <button>ADMISSION NOW</button>
          </div>

          <div className="form">
            <h3>Sign up</h3>
            <input type="text" placeholder="Email Adress" />
            <input type="text" placeholder="Email Adress" />
            <input type="text" placeholder="Email Adress" />
            <button>Sign up</button>
          </div>
        </div>
        <section id="teachers">
          <div className="container">
            <div>
              <h1>Our Teachers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                repellat aut neque! Doloribus sunt non aut reiciendis, vel
                recusandae obcaecati hic dicta repudiandae in quas quibusdam
                ullam, illum sed veniam!
              </p>
              <button onClick={sortBySalary}>Sort By Salary</button>
              <input
                type="text"
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </div>
            <div className="cards">
              {teachers.map((e) => {
                return (
                  <Link to={`/${e._id}`}>
                    <div className="card" key={e._id}>
                      <div className="forImg">
                        <img src={e.profil} alt="" />
                      </div>
                      <div>
                        <h1>{e.name}</h1>
                        <p className="subject">{e.subject}</p>
                        <p>{e.description}</p>
                        <p>{e.salary}$</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
