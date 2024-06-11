"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const handleEmail = (e) => {
    const getEmail = e.target.value;
    setEmail(getEmail);
    setError(false);
    setSucces(false);
  };

  const handlePassword = (e) => {
    setError(false);
    setSucces(false);
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      const bodyPayload = {
        email: email,
        password: password,
        username: username,
      };
      const res = await axios.post(
        `https://techtest.youapp.ai/api/login`,
        bodyPayload
      );
      console.log(res)
    //   console.log(res.config.data);
      setSucces(true);
      setTimeout(() => {
        router.push("/profile");
      }, 1500);
      localStorage.setItem("access_token", res.data.access_token);
      e.preventDefault();
    } catch (err) {
     
      console.log(err);
      if(password < 8){
        setError(true)
       
      }
      setError(true);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 flex  flex-col gap-16 h-screen overflow-y-hidden">
        <div className="pt-16 flex px-8">
          <Link href={"/register"} className="text-white font-bold text-xl">
            Back
          </Link>
        </div>
        <div className="justify-center items-center flex-col pt-3 p-8">
          <h1 className="text-white font-bold text-2xl pl-3">Login</h1>
          {succes ? (
            <p className=" pt-10 text-white flex items-center text-center justify-center">
              Login Succes
            </p>
          ) : null}
          {error ? (
            <p className="pt-10 text-white flex items-center text-center justify-center">
              Email And Password Not Found
            </p>
          ) : null}
          <form className=" md:space-y-6  flex-col flex gap-3 py-8" action="#">
            <div>
              <input
                value={email}
                type="email"
                name="email"
                id="email"
                className=" bg-teal-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Username/Email"
                required=""
                onChange={handleEmail}
              />
            </div>
            <div>
              <input
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="bg-teal-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                onChange={(e) => handlePassword(e)}
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={!email || !password}
              type="submit"
              className="w-full enabled:transition enabled:transform 
              enabled:hover:translate-x-1 enabled:hover:blue-300 cursor-pointer text-white mb-6 mt-3  enabled:bg-gradient-to-r enabled:from-cyan-500 enabled:to-blue-500 disabled:bg-gradient-to-r disabled:from-cyan-900 disabled:to-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Login
            </button>
            <p className="text-sm font-light  text-white dark:text-gray-400 flex justify-center text-center gap-2">
              No account ?{" "}
              <Link
                href={"/register "}
                className="font-medium text-yellow-200 underline dark:text-primary-500"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
