import React from "react";

const DAAAndDYAA2019 = () => {
  const awardsData = [
    {
      name: "Mr. Shashank Kumar",
      title: "Distinguished Young Alumnus Awardee",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/01.jpg",
    },
    {
      name: "Mr. Ketan Kapoor",
      title: "Distinguished Young Alumnus Awardee",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/2.jpg",
    },
    {
      name: "Mr. Rajiv Kumar",
      title: "DAA, Excellence in Engineering Innovation",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/4.jpg",
    },
    {
      name: "Prof. Subhash Suri",
      title: "DAA, Academic Excellence",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/5.jpg",
    },
    {
      name: "Mr. Sushil Chandra",
      title: "DAA, Managerial Excellence",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/6.jpg",
    },
    {
      name: "Mr. Mohinder Lal Nayyar",
      title: "Chief Guest",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/8.jpg",
    },
    {
      name: "Group Photograph",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/10.jpg",
    },
    {
      name: "Group Photograph",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/11.JPG",
    },
    {
      name: "Group Photograph",
      image: "http://awards.iitr.ac.in/doc/DAA%20and%20DYAA%202019/12.JPG",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 mt-[100px]">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        DAA & DYAA 2019
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awardsData.map((award, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <a href={award.image} target="_blank" rel="noopener noreferrer">
              <img
                src={award.image}
                alt={award.name}
                className="h-48 w-full object-cover rounded-md mb-4 hover:scale-105 transition-transform"
              />
            </a>
            <h3 className="text-xl font-semibold text-gray-800">{award.name}</h3>
            <p className="text-gray-600">{award.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DAAAndDYAA2019;
