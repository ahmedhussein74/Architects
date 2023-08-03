import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="w-32 md:w-48 text-center text-lg md:text-2xl mx-auto my-5 border-b-4 border-sky-500">
        Contact
      </h1>
      <form className="w-64 md:w-1/4 mb-3 flex flex-col items-center mx-auto">
        <input
          type="text"
          placeholder=" Name"
          className="w-full h-10 border-b-2 border-sky-500 outline-0 my-3 bg-gray-100"
        />
        <input
          type="email"
          placeholder=" Email"
          className="w-full h-10 border-b-2 border-sky-500 outline-0 my-3 bg-gray-100"
        />
        <input
          type="text"
          placeholder=" Subject"
          className="w-full h-10 border-b-2 border-sky-500 outline-0 my-3 bg-gray-100"
        />
        <input
          type="text"
          placeholder=" Comment"
          className="w-full h-10 border-b-2 border-sky-500 outline-0 my-3 bg-gray-100"
        />
        <button className="btn bg-blue-500 text-white text-lg md:text-xl rounded my-3 px-3 py-1">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Contact;
