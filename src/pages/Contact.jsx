import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Contact Us</h1>
      <form className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300">
          Name
          <input
            type="text"
            className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </label>
        <label className="block text-gray-700 dark:text-gray-300 mt-4">
          Email
          <input
            type="email"
            className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
