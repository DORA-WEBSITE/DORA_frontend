import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="space-y-2">
        <p>
          ➤{" "}
          <a
            href="https://alumni.iitr.ac.in/gallery/fdc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Foundation Day
          </a>
        </p>
        <p>
          ➤{" "}
          <Link
            to="/jubilee-reunions"
            className="text-blue-600 underline"
          >
            Jubilee Reunions
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Gallery;
