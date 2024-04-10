import React, { useState } from "react";
import "../../accounts.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  // Use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // View PAssword
  const handleViewPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  // Handle Submit
  const onSubmit = (data) => {
    const login = {
      email: data.email,
      password: data.password,
    };

    console.log(login);
    // axios
    //   .post("http://meskot.pythonanywhere.com/auth/jwt/create/meskot/", login, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     localStorage.setItem("token", response.data.access);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     setLoginError(true);
    //     console.error(error);
    //   });
  };

  return (
    <div>
      <div className="container form-container fw-semibold mt-5 pt-5">
        <div className="col-lg-5 col-md-6 col-12 mt-5 rounded">
          <div className="logo my-5 text-center">
            {/* <img
              src="img/Icon.png"
              width="130px"
              className="img-fluid"
              alt="Logo"
            /> */}
          </div>

          {loginError && (
            <p
              id="login-error"
              className="hidden animate__animated animate__fadeIn text-white error py-2 text-center rounded small mx-lg-4"
            >
              <span className="bi-exclamation-circle-fill text-white">
                &nbsp;
              </span>
              Incorrect username or password. Please try again!
            </p>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mx-lg-4">
            {/* Email */}
            <div className="input-group mt-2 shadow-lg">
              <span className="bi bi-envelope-fill input-group-text"></span>
              <div className="form-floating">
                <input
                  type="email"
                  name="email"
                  id="floatingEmail"
                  className="form-control fw-semibold bg-white"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    minLength: 6,
                  })}
                />
                <label htmlFor="floatingEmail">Email</label>
              </div>
            </div>
            {errors.email && (
              <p
                role="alert"
                className="bg-danger text-light small ps-4 ms-1 mt-1"
                style={{ borderRadius: "3px" }}
              >
                Email address required!
              </p>
            )}

            <div className="input-group mb-2 mt-3 shadow-lg">
              <span className="bi bi-lock-fill input-group-text"></span>
              <div className="form-floating">
                <input
                  type={passwordType}
                  name="password"
                  id="floatingPassword"
                  className="form-control fw-semibold bg-white"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 4,
                  })}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <span
                onClick={() => handleViewPassword()}
                id="password-eye"
                className="bi bi-eye-slash-fill input-group-text cursor"
              ></span>
            </div>
            {errors.password && (
              <p
                role="alert"
                className="bg-danger text-light small ps-4 ms-1 mt-1"
                style={{ borderRadius: "3px" }}
              >
                Password required!
              </p>
            )}

            <div className="row justify-content-between">
              <div className="offset-6 col-6 mt-3 fw-semibold">
                <p className="text-end small">
                  <Link to={"/forgot-password"} className="text-info">
                    Forgot Password?
                  </Link>
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="form-btn bg-red text-white px-5 fw-semibold py-3 my-3 w-100  text-uppercase"
            >
              Login
            </button>

            <p className="pt-2 text-white small">
              Don't have an Account?
              <Link to="/register" className="fw-semibold text-info">
                &nbsp; Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default Login;
