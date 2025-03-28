import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const BasicForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", number: "", password: "", repassword: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        number: Yup.string().required("Phone number is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        repassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm password is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log("Form Values:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="container mt-5 p-4 border rounded shadow-lg w-50">
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" className="text-danger fw-semibold" component="div" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" className="text-danger fw-semibold" component="div" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Phone</label>
            <Field name="number" type="text" className="form-control" />
            <ErrorMessage name="number" className="text-danger fw-semibold" component="div" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" className="text-danger fw-semibold" component="div" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Re-Password</label>
            <Field name="repassword" type="password" className="form-control" />
            <ErrorMessage name="repassword" className="text-danger fw-semibold" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-100">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;
