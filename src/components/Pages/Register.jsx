import React, { useState } from "react";
import "../../accounts.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  // use Form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      phone: "",
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

  // Handle submit
  const onSubmit = (data) => {
    const register = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      username: data.username,
    };

    if (data.password !== data.confirm_password) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!ageChecked && !agreeChecked) {
      setCheckBoxError(true);
      return;
    } else {
      setCheckBoxError(false);
    }

    console.log(register);
    // axios
    //   .post("", login, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     localStorage.setItem("token", response.data.access);
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     setLoginError(true);
    //     console.error(error);
    //   });
  };
  return (
    <div>
      <div className="container form-container fw-semibold mt-5">
        <div className="col-lg-5 col-md-6 col-12 mt-5 rounded">
          <div className="logo my-5 text-center">
            {/* <img
              src="img/Icon.png"
              width="130px"
              className="img-fluid"
              alt="Logo"
            /> */}
          </div>

          {registerError && (
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
            {/* Username */}
            <div
              className={`input-group mt-2 shadow-lg rounded ${
                errors.username && "border border-danger border-2 rounded"
              }`}
            >
              <span className="bi bi-person-fill input-group-text"></span>
              <div className="form-floating">
                <input
                  type="username"
                  name="username"
                  id="floatingUsername"
                  className="form-control fw-semibold bg-white"
                  placeholder="Username"
                  {...register("username", {
                    required: true,
                    minLength: 3,
                  })}
                />
                <label htmlFor="floatingUsername">Username</label>
              </div>
            </div>
            {errors.username && (
              <p
                role="alert"
                className="bg-danger text-light small ps-4 ms-1 mt-1"
                style={{ borderRadius: "3px" }}
              >
                Username required & must be greater than 3 chars.
              </p>
            )}
            {/* Email */}
            <div
              className={`input-group mt-2 shadow-lg rounded ${
                errors.email && "border border-danger border-2 rounded"
              }`}
            >
              <span className="bi bi-envelope-fill input-group-text"></span>
              <div className="form-floating">
                <input
                  type="email"
                  name="email"
                  id="floatingEmail"
                  className="form-control fw-semibold bg-white"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="Email"
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
            {/* Phone */}
            <div
              className={`input-group mt-2 shadow-lg rounded ${
                errors.phone && "border border-danger border-2 rounded"
              }`}
            >
              <span className="bi bi-phone-fill input-group-text"></span>
              <div className="form-floating">
                <input
                  type="tel"
                  name="phone"
                  id="floatingPhone"
                  className="form-control fw-semibold bg-white"
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                  placeholder="Phone"
                />
                <label htmlFor="floatingPhone">Phone</label>
              </div>
            </div>
            {errors.phone && (
              <p
                role="alert"
                className="bg-danger text-light small ps-4 ms-1 mt-1"
                style={{ borderRadius: "3px" }}
              >
                Phone number required & must be valid 10 digit!
              </p>
            )}
            {/* Password */}
            <div
              className={`input-group mt-2 shadow-lg rounded ${
                errors.password && "border border-danger border-2 rounded"
              }`}
            >
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
                Password required & must be greater than 4 chars!
              </p>
            )}
            {/* Confirm-password */}
            <div
              className={`input-group mt-2 shadow-lg rounded ${
                errors.confirm_password &&
                "border border-danger border-2 rounded"
              }`}
            >
              <span className="bi bi-check-all input-group-text"></span>
              <div className="form-floating">
                <input
                  type="password"
                  name="confirm_password"
                  id="floatingConfirmPassword"
                  className="form-control fw-semibold bg-white"
                  placeholder="Confirm Password"
                  {...register("confirm_password", {
                    required: true,
                  })}
                />
                <label htmlFor="floatingConfirmPassword">
                  Confirm password
                </label>
              </div>
            </div>
            {errors.confirm_password && (
              <p
                role="alert"
                className="bg-danger text-light small ps-4 ms-1 mt-1"
                style={{ borderRadius: "3px" }}
              >
                Password confirmation required!
              </p>
            )}
            {/* Password Not match */}
            {passwordError && (
              <p
                role="alert"
                className="bg-danger text-light small ps-4 ms-1 mt-1"
                style={{ borderRadius: "3px" }}
              >
                Password not match!
              </p>
            )}

            {/* Checkbox */}
            <div
              className={`p-2 rounded shadow mt-3 ${
                checkBoxError && "border border-danger"
              }`}
            >
              <div className="fw-semibold">
                <label className="cyberpunk-checkbox-label text-white small">
                  <input
                    onClick={() => setAgreeChecked(!agreeChecked)}
                    type="checkbox"
                    name="agree_terms"
                    id="agree_terms"
                    className="cyberpunk-checkbox"
                  />
                  I agree to the terms of use
                </label>
              </div>
              <div className="mt-3 fw-semibold">
                <label className="cyberpunk-checkbox-label text-white small">
                  <input
                    onClick={() => setAgeChecked(!ageChecked)}
                    type="checkbox"
                    name="age_18"
                    id="age_18"
                    className="cyberpunk-checkbox"
                  />
                  I here by certify I am over 18 years old!
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="form-btn text-white px-5 fw-semibold py-3 my-4 w-100  text-uppercase"
            >
              Login
            </button>

            <p className="pt-2 text-light small">
              Already have an account?
              <Link to="/login" className="fw-semibold text-info">
                &nbsp; Login
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

export default Register;
