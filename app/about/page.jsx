"use client";
import Image from "next/image";
import img from "../../public/images/toronto2.svg";
import { useState } from "react";
import sendContactForm from "../../lib/api";

const initValues = { name: "", email: "", message: "" };

const About = () => {
  const [state, setState] = useState(initValues);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values);
  };

  return (
    <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-black dark:text-white rounded-lg shadow-lg">
      <div className="flex flex-col justify-between sm:justify-start">
        <div className="flex flex-col  items-center sm:items-start">
          <h2 className="text-2xl sm: text-4x lg:text-5xl font-bold leading-tight mb-2">
            Lets talk about everything!
          </h2>
          <div className="relative group h-[30rem] w-[20rem]  overflow-hidden object-cover rounded-lg grayscale-60 ">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-green-200 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-l from-red-100 to-green-200 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src={img}
              fill
              priority={true}
              alt="logo"
              sizes="width:5wv,
                   height:10wv"
            />
          </div>
        </div>
        <div className="mt-8 text-center"></div>
      </div>
      <div className="flex flex-col justify-center sm:justify-end sm:mb-[2rem]">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="uppercase text-sm text-gray-600 dark:text-white font-bold"
          >
            Full Name
          </label>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:ring-2 focus:shadow-outline"
            type="text"
            name="name"
            id="name"
            value={values?.name}
            onChange={handleChange}
            required
            placeholder=""
          />
          <p className="invisible peer-invalid:visible text-red-700 dark:text-red-400 font-bold">
            * Please enter your name
          </p>
        </div>

        {/* Email */}
        <div className="mt-8">
          <label
            htmlFor="email"
            className="uppercase text-sm text-gray-600  dark:text-white font-bold"
          >
            Email
          </label>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:ring-2 focus:shadow-outline "
            type="email"
            name="email"
            id="email"
            value={values?.email}
            onChange={handleChange}
            required
            placeholder=""
          />
          <p className="invisible peer-invalid:visible text-red-700 dark:text-red-400 font-bold">
            * Please enter a valid email address
          </p>
        </div>

        {/* Message */}
        <div className="mt-8">
          <label
            htmlFor="message"
            className="uppercase text-sm text-gray-600  dark:text-white font-bold"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={values?.message}
            onChange={handleChange}
            required
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:ring-2 focus:shadow-outline"
          ></textarea>
          <p className="invisible peer-invalid:visible text-red-700 dark:text-red-400 font-bold">
            * This field cannot be empty
          </p>
        </div>

        {/* Send Button */}
        <div className="mt-8">
          <button
            type="submit"
            onClick={onSubmit}
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
