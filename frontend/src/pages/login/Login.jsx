import React from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import useFetch from "../../hooks/useFetch";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { loginUser } = useFetch("/auth/local"); // Pass the login URL

  const onSubmit = async (data) => {
    try {
      // Call the loginUser function with the form data
      await loginUser(data);
      alert("Login successful!");
    } catch (error) {
      console.log("Error during login", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Smart City Citizen - Login</title>
        <meta name="description" content="User Login Page" />
      </Helmet>
      <section>
        <div className="container">
          <div className="login_wrapper">
            <div className="login_para">
              <h1>Login or Register</h1>
              <p>
                Our resource library is free to access. If you are not a member
                it takes just 30 seconds to register. This will allow you to
                access all the enhanced features of this website. If you are
                already a member please take a moment to Login below. If you're
                not yet registered on this site please Register at
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>Email is Required</p>}
              </div>

              <div className="form_input">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p>Password is Required</p>}
              </div>
              <button>Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
