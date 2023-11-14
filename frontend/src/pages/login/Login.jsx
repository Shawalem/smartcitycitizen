import React, { useContext, useState } from "react";
import "./login.scss";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import axios from "axios";
import bcrypt from "string-encode-decode";
import { AuthContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

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
              `https://backend-app-lft6m.ondigitalocean.app/api/vusers?filters[email][$eq]=${res.data?.user?.email}`,
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
                  n:bcrypt.encode(res.data.user.first_name),
                  x: bcrypt.encode(res.data.user.email),
                  t: bcrypt.encode(res.data.jwt),
                  iv: true,
                };
                localStorage.setItem(
                  "smartCityCitizen",
                  JSON.stringify(userInformation)
                );
                setUser({
                  name:res.data.user.first_name,
                  email: res.data.user.email,
                  jwt: res.data.jwt,
                  isVerified: true,
                });
                reset();
                setLoading(false)
                toast.success("Login successfully");
              } else {
                const userInformation = {
                  n:bcrypt.encode(res.data.user.first_name),
                  x: bcrypt.encode(res.data.user.email),
                  t: bcrypt.encode(res.data.jwt),
                  iv:false
                };
                localStorage.setItem(
                  "smartCityCitizen",
                  JSON.stringify(userInformation)
                );
                setUser({
                  name:res.data.user.first_name,
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
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="news,smartcitycitizen, world news"/>
        <meta name="description" content="User Login Page" />
        <link rel="canonical" href={window.location.href} />
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
              <p>Don't have an account? <Link to='/register' ><u>Register</u></Link> now</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
