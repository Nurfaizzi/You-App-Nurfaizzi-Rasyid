"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Modal from "./modal";
const Login = ({ id, name, profilePic, skills, role }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalInterest, setShowModalInterest] = useState(false);




  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModalInterest = () => {
    setShowModalInterest(!showModalInterest);
  };

  const handleShowModalInterest = () => {
    setShowModalInterest(!showModalInterest);
  };


  const createProfile = async () => {
try{

}catch(err){

}
  }

  return (
    <div>
      <div className="bg-slate-950 flex-col gap-16 h-screen  ">
        <div className="flex">
          <Link
            href={"/login"}
            className="text-white font-bold text-xl pt-16 flex px-8"
          >
            Back
          </Link>
          <div className=" pt-16 flex justify-around pl-16 text-center">
            <h1 className="text-white font-bold text-xl">Name</h1>
          </div>
        </div>

        <div class="pt-8 flex p-4 ">
          <div className="box-border border- h-40 w-full p-4 rounded-xl bg-teal-950 ">
            <h1 className="text-white inline-block align-baseline cursor-pointer">
              name
            </h1>
          </div>
        </div>

        <div>
          {showModal ? (
            <div className="bg-slate-950 h-auto px-3 ">
              <div className="box-border border  w-full  rounded-xl bg-teal-950 ">
                <div className="flex justify-between p-4">
                  <h1 className="text-white">About</h1>
                  {!showModal ? (
                    <button onClick={handleShowModal} className="text-white">
                      Open
                    </button>
                  ) : (
                    <button onClick={handleCloseModal} className="text-white">
                      save & update
                    </button>
                  )}
                </div>
                <div className="flex pb-8 px-3 ">
                <div className="flex bg-teal-950 ">
      <div className="flex-col flex gap-3">
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
             Gender :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Birthday :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
       
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Horoscope:
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Zodiac :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Height :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Weight :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <div className="box-border border h-28 mt-0 w-full  rounded-xl bg-teal-950 p-4">
                <div className="flex justify-between ">
                  <h1 className="text-white">About</h1>
                  {!showModal ? (
                    <button onClick={handleShowModal} className="text-white">
                      Open
                    </button>
                  ) : (
                    <button onClick={handleCloseModal} className="text-white">
                      save & update
                    </button>
                  )}
                </div>
                <div className="flex pt-6 text-center items-center justify-center">
                  <p className="text-white text-sm">
                    Add in your your to help others know you better
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          {showModalInterest ? (
            <div className="bg-slate-950 h-96 p-3">
              <div className=" h-80 w-full   rounded-xl bg-teal-950 ">
                <div className="flex justify-between p-4">
                  <h1 className="text-white">Interest</h1>
                  {!showModalInterest ? (
                    <button
                      onClick={handleShowModalInterest}
                      className="text-white"
                    >
                      Open
                    </button>
                  ) : (
                    <button
                      onClick={handleCloseModalInterest}
                      className="text-white"
                    >
                      save & update
                    </button>
                  )}
                </div>
                <div className="flex px-3 pt-3">
                <div className=" bg-teal-950 ">
      <div className="flex-col flex gap-3">
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
             Gender :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Birthday :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
       
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Horoscope:
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Zodiac :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Height :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="flex justify-between">
          <div class="md:w-1/3">
            <label
              class="block text-white   font-bold text-sm w-24 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Weight :
            </label>
          </div>
          <div class=" flex justify-between pl-28 h-6 ">
            <input
              class="bg-gray-200 flex items-end justify-end appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Jane Doe"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-950  p-4">
              <div className="  mt-0 w-full h-28 rounded-xl bg-teal-950 ">
                <div className="flex justify-between p-4">
                  <h1 className="text-white">Interest</h1>
                  {!showModalInterest ? (
                    <button
                      onClick={handleShowModalInterest}
                      className="text-white"
                    >
                      Open
                    </button>
                  ) : (
                    <button
                      onClick={handleCloseModalInterest}
                      className="text-white"
                    >
                      save & update
                    </button>
                  )}
                </div>
                <div className="flex p-3 text-center items-center justify-center">
                  <p className="text-white text-sm">
                    Add in your your to help others know you better
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;
