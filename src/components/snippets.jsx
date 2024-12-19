import React from "react";

const Snippets = () => {
  const snippetsData = [
    {
      img: "https://alumni.iitr.ac.in/media/website/media/Screenshot_2024-12-17_124851.png",
      link: "https://almamater.iitr.ac.in/alumPortal/november_2024.html",
      alt: "November 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/Screenshot_2024-11-18_111702.png",
      link: "https://almamater.iitr.ac.in/alumPortal/October_2024.html",
      alt: "October 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/sep2024.png",
      link: "https://almamater.iitr.ac.in/alumPortal/september_2024.html",
      alt: "September 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/snipaug2024.png",
      link: "https://almamater.iitr.ac.in/alumPortal/august_2024.html",
      alt: "August 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/july24.png",
      link: "https://almamater.iitr.ac.in/alumPortal/july_2024.html",
      alt: "July 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/june24.png",
      link: "https://almamater.iitr.ac.in/alumPortal/june_2024.html",
      alt: "June 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/may2024.png",
      link: "https://almamater.iitr.ac.in/alumPortal/May_2024.html",
      alt: "May 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/april24.png",
      link: "https://almamater.iitr.ac.in/alumPortal/April_2024.html",
      alt: "April 2024 Snippet",
    },
    {
      img: "https://alumni.iitr.ac.in/media/website/media/Screenshot_2024-04-15_110343.png",
      link: "https://almamater.iitr.ac.in/alumPortal/march_2024without.html",
      alt: "March 2024 Snippet",
    },
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-7xl mx-auto mt-[150px]">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">Snippets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {snippetsData.map((snippet, index) => (
          <a
            key={index}
            href={snippet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={snippet.img}
                alt={snippet.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Snippets;
