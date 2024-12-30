import React from "react";

const NewsOutreach = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-[150px] mb-5">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700">News & Outreach</h1>
        <p className="text-gray-500 mt-2 text-lg">
          Stay updated with the latest news about IITR Alumni and campus activities.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Links */}
      <div className="space-y-6">
        <h4 className="flex items-center gap-2">
          <span className="text-xl font-medium text-gray-700">1.</span>
          <a
            href="/snippets"
            className="text-blue-600 hover:underline font-semibold text-lg transition duration-200"
          >
            Snippets
          </a>
        </h4>
        <h4 className="flex items-center gap-2">
          <span className="text-xl font-medium text-gray-700">2.</span>
          <a
            href="https://iitrdora.iitr.ac.in/news/ypages/obituaries.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold text-lg transition duration-200"
          >
            Obituaries
          </a>
        </h4>
        <h4 className="flex items-center gap-2">
          <span className="text-xl font-medium text-gray-700">3.</span>
          <a
            href="https://iitrdora.iitr.ac.in/news/books.php"
              target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold text-lg transition duration-200"
          >
            Books by IITR Alumni
          </a>
        </h4>
        <h4 className="flex items-center gap-2">
          <span className="text-xl font-medium text-gray-700">4.</span>
          <a
            href="https://www.iitr.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold text-lg transition duration-200"
          >
            IITR in the News
          </a>
        </h4>
        <h4 className="flex items-center gap-2">
          <span className="text-xl font-medium text-gray-700">5.</span>
          <a
            href="/directorsmessage"
            // target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold text-lg transition duration-200"
          >
          Director's Message
          </a>
        </h4>
      </div>
    </div>
  );
};

export default NewsOutreach;
