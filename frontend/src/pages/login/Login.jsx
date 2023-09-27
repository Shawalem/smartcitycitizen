import React, { useContext, useState } from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from "axios";
import bcrypt from "string-encode-decode";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [loading,setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const userInfo = {
        identifier: data.email,
        password: data.password,
      };
      axios
        .post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/local`, userInfo)
        .then((res) => {
          axios
            .get(
              `https://backend-app-lft6m.ondigitalocean.app/api/vusers?email_contains=${res.data.user.email}`,
              {
                headers: {
                  Authorization:
                    "Bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
                },
              }
            )
            .then((response) => {
              if (response.data.data[0]?.attributes?.email === res.data.user.email) {
                const userInformation = {
                  x: bcrypt.encode(res.data.user.email),
                  t: bcrypt.encode(res.data.jwt),
                  iv: true,
                };
                localStorage.setItem(
                  "smartCityCitizen",
                  JSON.stringify(userInformation)
                );
                setUser({
                  email: res.data.user.email,
                  jwt: res.data.jwt,
                  isVerified: true,
                });
                reset();
                setLoading(false)
              } else {
                const userInformation = {
                  x: bcrypt.encode(res.data.user.email),
                  t: bcrypt.encode(res.data.jwt),
                  iv:false
                };
                localStorage.setItem(
                  "smartCityCitizen",
                  JSON.stringify(userInformation)
                );
                setUser({
                  email: res.data.user.email,
                  jwt: res.data.jwt,
                  isVerified: false,
                });
                reset()
                setLoading(false);
              }
            })
            .catch((er) => {
              console.log(er.message);
            });
        })
        .catch((e) => {
          toast.error(e.message);
        });
    } catch (error) {
      toast.error("something is wrong!");
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
              {
                loading ? (
                  <button style={{pointerEvents:"none"}}>Logging...</button>
                  ):(
                  <button>Login</button>
                )
              }
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
