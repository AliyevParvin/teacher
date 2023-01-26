import React from "react";
import { SignupSchema } from "./schema";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const AddSchool = () => {
  const navigate = useNavigate();
  return (
    <div id="add-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AddSchool</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Formik
        initialValues={{
          name: "",
          profil: "",
          salary: 0,
          subject: "Physics Teacher",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post("http://localhost:8000/schools", values);
          console.log(values);
        //   navigate("/")
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="input">
              <Field name="name" placeholder="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div className="input">
              <Field name="salary" type="number" placeholder="salary" />
              {errors.salary && touched.salary ? (
                <div>{errors.name}</div>
              ) : null}
            </div>
            <div className="input">
              <Field name="description" placeholder="description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
            </div>
            <div className="input">
              <Field name="subject" placeholder="subject" />
              {errors.subject && touched.subject ? (
                <div>{errors.subject}</div>
              ) : null}
            </div>
            <div className="input">
              <Field name="profil" type="url" placeholder="profil" />
              {errors.profil && touched.profil ? (
                <div>{errors.profil}</div>
              ) : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSchool;
