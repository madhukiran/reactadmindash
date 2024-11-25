import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        className="card shadow-2-strong col-12 col-md-8 col-lg-6 col-xl-5 mx-auto"
        style={{ borderRadius: "1rem" }}
      >
        <div className="card-body p-5 text-center">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h3>Contact Us</h3>
            <div className="mb-3">
              <label>Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="form-control"
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message as string}</p>
              )}
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="form-control"
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message as string}</p>
              )}
            </div>
            <div className="mb-3">
              <label>Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="form-control"
              />
              {errors.message && (
                <p className="text-danger">
                  {errors.message.message as string}
                </p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
