import React, { useEffect } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { getLoginData } from "../../utils";
import jsonData from "../../data.json";

const { string, object } = yup;

const initialFormValue = {
  userName: "",
  password: "",
};

export const validationForFirstStep = object().shape({
  userName: string().required("userName is required"),
  password: string().required("Password is required"),
});

const Login = () => {
  let navigate = useNavigate();
  const isAuthenticated = getLoginData();

  const onSubmit = (value) => {
    const isValid = jsonData.filter(
      (x) => x.userName === value.userName && x.password === value.password
    );
    if (isValid.length > 0) {
      localStorage.setItem("loginUser", JSON.stringify(value));
      navigate("/dashboard");
    } else {
      toast.error("Please enter valid username and password!");
    }
  };

  useEffect(() => {
    if (isAuthenticated?.userName) {
      return navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl"></div>
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            </div>
            <div className="mt-5">
              <Formik
                onSubmit={onSubmit}
                initialValues={initialFormValue}
                validationSchema={validationForFirstStep}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ values, errors, handleChange, handleSubmit }) => {
                  return (
                    <div>
                      <div className="relative mt-6">
                        <label for="userName" className="text-gray-400">
                          User Name
                        </label>
                        <input
                          name="userName"
                          placeholder="User name"
                          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                          onChange={handleChange}
                          value={values.binNumbers}
                        />
                      </div>
                      <div>
                        {errors?.userName && !values?.userName && (
                          <span className="text-red-500">
                            {errors?.userName}
                          </span>
                        )}
                      </div>
                      <div className="relative mt-6">
                        <label for="password" className="text-gray-400">
                          Password
                        </label>
                        <input
                          className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleChange}
                          value={values.binNumbers}
                        />
                      </div>
                      {errors?.password && !values?.password && (
                        <span className="text-red-500">{errors?.password}</span>
                      )}
                      <div className="my-6">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
