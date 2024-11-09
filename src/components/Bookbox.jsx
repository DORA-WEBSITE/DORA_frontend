import React from 'react';

const BookBox = ({ title, description, imgSrc, imgDescription }) => {
  if (!Array.isArray(imgDescription)) {
    console.error('imgDescription should be an array');
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl p-6 rounded-lg shadow-lg mx-auto">
      
      <div className="h-[514px] w-[780px] flex flex-col justify-center bg-gray-300 p-5 box-border">
        <h3 className="font-bold text-3xl mb-8 bg-gray-300 text-black">{title}</h3>
        <p className="font-normal text-lg leading-6 text-black bg-gray-300">{description}</p> 
      </div>
      
      
      <div className="bg-[#22385A] h-[591px] w-[399px] flex flex-col justify-center items-center p-4 box-border">
        <img 
          src={imgSrc} 
          alt={title} 
          className="max-h-[80%] w-[241px] h-[340px] mb-8 shadow-xl object-cover"
        />
        {imgDescription.map((line, index) => (
          <p key={index} className="text-white text-sm font-semibold text-center bg-[#22385A]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BookBox;
