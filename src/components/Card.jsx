import React from "react";

const Card = ({ title, description, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 flex-grow bg-white dark:bg-gray-800 text-black dark:text-white">
    <div className="px-6 py-4">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Project
      </a>
    </div>
  </div>
);

export default Card;
