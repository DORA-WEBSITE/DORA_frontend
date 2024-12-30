import React from "react";

const AlumniAwardShowcase = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md space-y-6 mt-[100px]">
      <h1 className="text-2xl font-bold text-gray-800">Distinguished Alumnus Awards</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejCQcUwwPiq2BEvx3xl7XYgAFWjudjlbvo8O9t4F5IEtlZPg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Guidelines & Nominations form for Distinguished Alumnus Awards - 2024
            </a>
          </h2>
          <span className="text-red-500 font-medium italic text-sm">Closed!</span>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfp9MQ8K1hz2BQU6AqRxBZm2Z2vukLbSM8TQfyI7WTdhS8paw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Guidelines & Nominations form for Outstanding Service Awards - 2024
            </a>
          </h2>
          <span className="text-red-500 font-medium italic text-sm">Closed!</span>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSez8iMEe9NhiKveA9mpauEWnKnP12K8t7lI1PtNuBC2Db-qLA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Guidelines & Nominations form for Distinguished Young Alumnus Awards - 2024
            </a>
          </h2>
          <span className="text-red-500 font-medium italic text-sm">Closed!</span>
        </div>
      </div>
      
      <hr className="border-gray-300" />
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-700">
          <a
            href="https://iitrdora.iitr.ac.in/news/ypages/daa-2023.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            List of Distinguished Alumnus Awardees - 2023
          </a>
        </h2>
        
        <h2 className="text-lg font-semibold text-gray-700">
          <a
            href="https://iitrdora.iitr.ac.in/news/ypages/daa-2023.php#dyaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            List of Distinguished Young Alumnus Awardees - 2023
          </a>
        </h2>
        
        <h3 className="text-lg font-semibold text-gray-700">
          <a
            href="https://iitrdora.iitr.ac.in/news/ypages/daa-2023.php#osa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            List of Outstanding Service Awardees - 2023
          </a>
        </h3>
      </div>
      
      <hr className="border-gray-300" />
      
      <p className="text-lg font-semibold text-blue-600 hover:underline">
        <a
          href="https://alumni.iitr.ac.in/awards/daa/dalist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          List of Previous Distinguished Alumnus Awardees, Outstanding Service Awardees & Distinguished Young Alumnus Awardees
        </a>
      </p>
    </div>
  );
};

export default AlumniAwardShowcase;
