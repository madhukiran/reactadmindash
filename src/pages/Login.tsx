import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    // Add authentication logic
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow-2-strong col-12 col-md-8 col-lg-6 col-xl-5 mx-auto" style={{ borderRadius: "1rem" }}>
        <div className="card-body p-5 text-center">
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h3>Admin Dashboard</h3>
            <div className="mb-3">
              <label>Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="form-control"
              />
              {errors.email && (
                <p className="text-danger">
                  {errors.email.message as string}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                className="form-control"
              />
              {errors.password && (
                <p className="text-danger">
                  {errors.password.message as string}
                </p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
