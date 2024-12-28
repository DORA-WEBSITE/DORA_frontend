import React from "react";

const DAA2018 = () => {
  const events = [
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/9.jpg",
      caption: "Welcome of Prof. Ajit K. Chaturvedi, Director IIT Roorkee",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/10.jpg",
      caption: "Kulgeet (Institute Song)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/3.jpg",
      caption: "Welcome of Dr. Ramachandra Naidu Galla",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/5.jpg",
      caption: "Welcome of Mr. Sanjiv Singh",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/14.jpg",
      caption: "Prof. Mahesh Chandra Tandon (DAA, Excellence in Engineering or Technology Innovation)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/17.jpg",
      caption: "Prof. Brij Agrawal (DAA, Academic or Research Excellence)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/20.jpg",
      caption: "Dr. Ramachandra Naidu Galla (DAA, Entrepreneurial Excellence)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/23.jpg",
      caption: "Dr. Ajay Mathur (DAA, Managerial Excellence in Private, Public or Government Sector)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/26.jpg",
      caption: "Mr. Sanjiv Singh (DAA, Managerial Excellence in Private, Public or Government Sector)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/28.jpg",
      caption: "Dr. Ajay Kumar (DAA, Excellence in Engineering or Technology Innovation)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/29.jpg",
      caption: "Prof. Sudhir Jain (DAA, Academic or Research Excellence)",
    },
    {
      img: "http://awards.iitr.ac.in/images/Distinguished-Award-Ceremony-2018/30.jpg",
      caption: "DAA Awardees with Alumni and Faculty of IIT Roorkee",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-[150px]">
      <h1 className="text-2xl font-bold text-center mb-6">
        Distinguished Alumnus Award (DAA) 2018
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md">
            <a href={event.img} target="_blank" rel="noopener noreferrer">
              <img
                src={event.img}
                // alt={event.caption}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-4">
              <p className="text-sm text-gray-700">{event.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DAA2018;
