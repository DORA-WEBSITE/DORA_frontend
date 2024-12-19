import React from "react";
import arrow from "../assets/images/arrow.png";
const Gallery = () => {
    const reunions = [
        {
          title: "Coral Jubilee Reunion 2018",
          link: "https://drive.google.com/drive/folders/1bTKS-wrwL-H_9oPbdAbcJ6qsUuEmu_1-",
        },
        {
          title: "Coral Jubilee Reunion 2019",
          link: "https://iitracin-my.sharepoint.com/personal/dora_office_iitr_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdora%5Foffice%5Fiitr%5Fac%5Fin%2FDocuments%2Fphoto1989&ga=1",
        },
        {
          title: "Diamond Jubilee Reunion 2019",
          link: "https://drive.google.com/drive/folders/1p9hZi5vHx6ZeTGEwt8_4WKrT9A0b2kEr",
        },
        {
          title: "Golden Jubilee Reunion 2018",
          link: "https://drive.google.com/drive/folders/1bTKS-wrwL-H_9oPbdAbcJ6qsUuEmu_1-",
        },
        {
          title: "Golden Jubilee Reunion 2019",
          link: "https://iitracin-my.sharepoint.com/personal/dora_office_iitr_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdora%5Foffice%5Fiitr%5Fac%5Fin%2FDocuments%2Fphoto1989&ga=1",
        },
        {
          title: "Silver Jubilee Reunion 2018",
          link: "https://drive.google.com/drive/folders/1bTKS-wrwL-H_9oPbdAbcJ6qsUuEmu_1-",
        },
        {
          title: "Silver Jubilee Reunion 2019",
          link: "https://iitracin-my.sharepoint.com/personal/dora_office_iitr_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdora%5Foffice%5Fiitr%5Fac%5Fin%2FDocuments%2Fphoto1989&ga=1",
        },
      ];
      const celebrations = [
        {
          title: "Foundation Day Celebration - 2018",
          link: "https://iitracin-my.sharepoint.com/:f:/g/personal/dora_office_iitr_ac_in/EvERUhhlonNIr8sskIpthFABJTT4TzOCh9e0yt0-quQjqQ?e=bDnPGC",
        },
        {
          title: "Foundation Day Celebration - 2019",
          link: "https://drive.google.com/drive/folders/1AdyXYXHf4js861QzJ17Y7Hs2dGIZxnED?usp=sharing",
        },
        {
          title: "Foundation Day Celebration - 2020",
          link: "https://iitracin-my.sharepoint.com/:f:/g/personal/dora_office_iitr_ac_in/EvERUhhlonNIr8sskIpthFABJTT4TzOCh9e0yt0-quQjqQ?e=bDnPGC",
        },
      ];
    return (
    <div class="pt-48 text-center mb-4">
        <div class="text-center text-[#BFBFBF] font-passion text-6xl font-bold">
            Gallery
        </div>
        <div class="flex flex-col space-y-16 mt-[70px]">
            {/* <div class="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12">
                <div class="text-2xl font-bold text-[32px] font-poppins text-blue-900">Foundation Day</div>
             
            </div> */}
               <div className="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12">
      <div className="text-2xl font-bold text-[32px] font-poppins text-blue-900">
        Foundation Day Celebrations
      </div>
      <div className="text-gray-700 ml-[35px]">
        {celebrations.map((celebration, index) => (
          <div key={index}>
            <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
              <div>{celebration.title}</div>
              <a href={celebration.link} target="_blank" rel="noopener noreferrer">
              <img src={arrow} alt=""/>
              </a>
            </div>
            <hr className="h-0.5 bg-[#CCCCCC] border-none" />
          </div>
        ))}
      </div>
    </div>
            <div className="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12">
      <div className="text-2xl font-bold text-[32px] font-poppins text-blue-900">
        Jubilee Reunions
      </div>
      <div className="text-gray-700 ml-[35px]">
        {reunions.map((reunion, index) => (
          <div key={index}>
            <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
              <div>{reunion.title}</div>
              <a href={reunion.link} target="_blank" rel="noopener noreferrer">
              <img src={arrow} alt=""/>
              </a>
            </div>
            <hr className="h-0.5 bg-[#CCCCCC] border-none" />
          </div>
        ))}
      </div>
    </div>
        </div>
    </div>
    );
};   

export default Gallery;