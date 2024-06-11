import React, { useState } from "react";

const Modal = ({ name, gender, birhday }) => {
  const [showModal, setShowModal] = useState(false);
  const [form,setForm] = [{
    name,
    gender,
    birhday,
    horoscope,
    zodiac,
    height,
    weight
  }]




  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
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
  );
};

export default Modal;
