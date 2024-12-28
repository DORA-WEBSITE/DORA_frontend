import React from "react";

const JubileeReunions = () => {
  const reunions = [
    {
      imageSrc: "https://alumni.iitr.ac.in/media/website/media/DSC01270.JPG",
      link: "https://drive.google.com/drive/folders/1bTKS-wrwL-H_9oPbdAbcJ6qsUuEmu_1-",
      title: "Silver Jubilee Reunion - ",
      batch: "1999 Batch & 2000 (B.Arch.)",
    },
    {
      imageSrc: "https://alumni.iitr.ac.in/media/website/media/WhatsApp_Image_2024-12-16_at_4.29.50_PM.jpeg",
      link: "https://iitracin-my.sharepoint.com/personal/dora_office_iitr_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdora%5Foffice%5Fiitr%5Fac%5Fin%2FDocuments%2Fphoto1989&ga=1",
      title: "Coral Jubilee Reunion - ",
      batch: "1989 Batch & 1990 (B.Arch.)",
    },
    {
      imageSrc: "https://alumni.iitr.ac.in/media/website/media/1974.jpg",
      link: "https://drive.google.com/drive/folders/1p9hZi5vHx6ZeTGEwt8_4WKrT9A0b2kEr",
      title: "Golden Jubilee Reunion - ",
      batch: "1974 Batch & 1975 (B.Arch.)",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md mt-[150px]">
      <h1 className="text-3xl font-bold mb-4">Jubilee Reunions</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reunions.map((reunion, index) => (
          <div key={index} className="text-center">
            <a href={reunion.link} target="_blank" rel="noopener noreferrer">
              <img
                src={reunion.imageSrc}
                alt={reunion.title}
                className="w-full h-40 object-cover rounded-md border-2 border-gray-300 mb-2"
              />
            </a>
            <p className="text-lg font-semibold">
              <a
                href={reunion.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {reunion.title}
              </a>
            </p>
            <p className="text-gray-700">{reunion.batch}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JubileeReunions;
