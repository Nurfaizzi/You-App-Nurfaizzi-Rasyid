"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const [isEmpety, setIsEmpety] = useState(false);

  const handleEmail = (e) => {
    const getEmail = e.target.value;
    setEmail(getEmail);
    setError(false);
    setSucces(false);
    setIsEmpety(false);
  };

  const handleUsername = (e) => {
    const getUsername = e.target.value;
    setUsername(getUsername);
    setError(false);
    setSucces(false);
    setIsEmpety(false);
  };

  const handlePassword = (e) => {
    const getPassword = e.target.value;
    setPassword(getPassword);
    setError(false);
    setSucces(false);
    setIsEmpety(false);
  };

  const handleConfirm = (e) => {
    const getConfirm = e.target.value;
    setConfirm(getConfirm);
    setError(false);
    setSucces(false);
    setIsEmpety(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (email == "" || password == "" || username == "" || confirm == "") {
        setIsEmpety(true);
        return;
      }
      const bodyPayload = {
        email: email,
        username: username,
        password: password,
        confirm: confirm,
      };
      const response = await axios.post(`https://techtest.youapp.ai/api/register`, bodyPayload)
      console.log(response)
      setSucces(true)
    //   console.log(
    //     `email ${email} username ${username} password ${password} confirm password ${confirm}`
    //   );
    } catch (err) {
        console.log(err)
        if(err.status=400){
            setError(true)
        }
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-tr from-slate-900 to-teal-900 flex  flex-col gap-16 h-screen">
        <div className="pt-16 flex px-8">
          <Link href={"/login"} className="text-white font-bold text-xl">
            Back
          </Link>
        </div>
        <div className="justify-center items-center flex-col pt-3 p-8">
          <h1 className="text-white font-bold text-2xl pl-3">Register</h1>
          {succes ? (
            <p className=" pt-10 text-white flex items-center text-center justify-center">
              Register Succes
            </p>
          ) : null}
          {error ? (
            <p className="pt-10 text-white flex items-center text-center justify-center">
             input form incorrect!!
            </p>
          ) : null}
          {isEmpety ? (
            <p className="pt-10 text-white flex items-center text-center justify-center">
              the form cannot be empty!!!
            </p>
          ) : null}
          <form className=" md:space-y-6  flex-col flex gap-3 py-8" action="#">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleEmail}
                className=" bg-teal-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                required=""
              />
            </div>
            <div>
              <input
                type="name"
                name="name"
                id="name"
                onChange={handleUsername}
                className=" bg-teal-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Create Username"
                required=""
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                onChange={handlePassword}
                className="bg-teal-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Confirm Password"
                onChange={handleConfirm}
                className="bg-teal-900 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!email || !password || !username || !confirm}
              className="w-full enabled:transition enabled:transform 
              enabled:hover:translate-x-1 enabled:hover:blue-300 cursor-pointer text-white mb-6 mt-3  enabled:bg-gradient-to-r enabled:from-cyan-500 enabled:to-blue-500 disabled:bg-gradient-to-r disabled:from-cyan-900 disabled:to-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Register
            </button>
            <p className="text-sm font-light  text-white dark:text-gray-400 flex justify-center text-center gap-2">
              Have an account ?
              <Link
                href={"/login"}
                className="font-medium text-yellow-200 underline dark:text-primary-500"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
