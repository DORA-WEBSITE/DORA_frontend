import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow.png";

const Awards = () => {
    return (
        <div className="pt-48 text-center mb-4">
            <div className="text-center text-[#BFBFBF] font-passion text-6xl font-bold">
                Awards and Prizes
            </div>
            <div className="flex flex-col space-y-16 mt-[70px] ">
                <div className="shadow-lg shadow-[#BFBFBF] w-4/5 mx-auto p-[60px] space-y-12">
                    {/* <Link to="/alumniawardshowcase">
                        <div className="text-2xl font-bold text-[32px] font-poppins text-blue-900">Distinguished Alumnus Awards</div>
                        <img src={arrow} alt="" />
                    </Link> */}
                     <Link to="/alumniawardshowcase">
                      <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className="ml-[265px] text-2xl font-bold text-[32px] font-poppins text-blue-900">Distinguished Alumnus Awards</div>

                           
                            <div> <img src={arrow} alt="" style={{ marginLeft: "0.5vw", marginTop: "0.5vw" }} /></div>

                        </div>
                        <hr className="w-1/2 h-0.5 bg-[#CCCCCC] border-none ml-[260px]" />

                        </Link>

                    <div className="text-gray-700 ml-[35px]">
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>DAA & DYAA 2019</div>
                            <Link to="/awards/daa-dyya-2019">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>DAA - 2019</div>
                            <Link to="/awards/daa-2019">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Distinguished Alumnus Award (DAA) 2018</div>
                            <Link to="/awards/daa-2018">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Distinguished Alumnus Award (DAA) 2018</div>
                            <Link to="/awards/daa-2018">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    </div>
                </div>
                <div className="shadow-lg shadow-[#BFBFBF]  w-4/5 mx-auto p-[60px] space-y-12 text-blue-900">
                    <a href="https://iitrdora.iitr.ac.in/news/ypages/daa-2022.php#osa">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className="text-2xl font-bold text-[32px] font-poppins">Outstanding Service Awards

                            </div>
                            <div> <img src={arrow} alt="" style={{ marginLeft: "39vw", marginTop: "0.5vw" }} /></div>

                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    </a>

                </div>
                <div className="shadow-lg shadow-[#BFBFBF]  w-4/5 mx-auto p-[60px] space-y-12 text-blue-900">
                    <div className="text-2xl font-bold text-[32px] font-poppins">IIT Roorkee Research Awards</div>
                    <div className="text-gray-700 ml-[35px]">
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>A.S. Arya-IITR Disaster Prevention Award</div>
                            <Link to="/awards/as-arya-disaster-prevention-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Gopal Ranjan Technology Award</div>
                            <Link to="/awards/gopal-ranjan-technology-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>HRED Hydro & Renewable Energy Award</div>
                            <Link to="/awards/hred-hydro-renewable-energy-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>HRED River Ganga Rejuvenation Award</div>
                            <Link to="/awards/hred-river-ganga-rejuvenation-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Khosla National Award</div>
                            <Link to="/awards/khosla-national-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Mahesh Varma Technology Innovation Award</div>
                            <Link to="/awards/mahesh-varma-technology-innovation-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>O. P. Jain Memorial Structural Design Award</div>
                            <Link to="/awards/op-jain-memorial-structural-design-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Prof. A. S. Arya Young Earthquake Engineer Award</div>
                            <Link to="/awards/prof-a-s-arya-young-earthquake-engineer-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                        <div className="flex justify-between items-center text-[18px] font-poppins mt-[25px] mb-[5px]">
                            <div>Prof. S. R. Mehra Memorial Award</div>
                            <Link to="/awards/prof-s-r-mehra-memorial-award">
                                <img src={arrow} alt="" />
                            </Link>
                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    </div>
                </div>

                <div className="shadow-lg shadow-[#BFBFBF]  w-4/5 mx-auto p-[60px] space-y-12 text-blue-900">
                    <a href="https://iitrdora.iitr.ac.in/alumni/rk-prize.php">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className="text-2xl font-bold text-[32px] font-poppins">  Ram Kumar Prize

                            </div>
                            <div> <img src={arrow} alt="" style={{ marginLeft: "50vw", marginTop: "0.5vw" }} /></div>

                        </div>
                        <hr className="h-0.5 bg-[#CCCCCC] border-none"></hr>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default Awards;
