import React from "react";

const NewsOutreach = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-[100px] md:mt-[150px] lg:mt-[150px] mb-5">
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
      {[
        { label: "Snippets", href: "/snippets" },
        { label: "Obituaries", href: "https://iitrdora.iitr.ac.in/news/ypages/obituaries.html", external: true },
        { label: "Books by IITR Alumni", href: "https://iitrdora.iitr.ac.in/news/books.php", external: true },
        { label: "IITR in the News", href: "https://www.iitr.ac.in/", external: true },
        { label: "Director's Message", href: "/directorsmessage" },
      ].map(({ label, href, external }, index) => (
        <h4 key={index} className="flex items-center gap-2">
          <span className="text-xl font-medium text-gray-700">{index + 1}.</span>
          <a
            href={href}
            target={external ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold text-lg transition duration-200"
          >
            {label}
          </a>
        </h4>
      ))}
    </div>
  </div>
  
  );
};

export default NewsOutreach;
