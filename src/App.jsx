import React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";  
import Header from "./components/Header";  
import GivingBack from "./pages/GivingBack";
import Awards from './pages/Awards'
import Gallery from './pages/Gallery'
import Schemes from './pages/Schemes'
import Home from "./pages/Home";
import { Error } from './Pages/Error';
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Dora_Office from "./pages/Dora_Office";
import GlobalNetwork from "./components/globalNetwork";
import NewsOutreach from "./components/NewsOutreach";
import Snippets from "./components/snippets";
import Events from "./components/reunions";
import JubileeReunions from "./components/jublieeReunion";
import StudentsVisitingInstitutions from "./components/StudentsVisitingInstitutions";
import GoodInternationalConferences from "./components/GoodInternationalConferences";
import InternationalResearchInternships from "./components/InternationalResearchInternships";
import DAA_DYAA2019 from "./components/awards-comp/DAA_DYAA2019";
import DAA_2019 from "./components/awards-comp/DAA_2019";
import DAA_2018 from "./components/awards-comp/DAA_2018";
import OutstandingServiceAward2019 from "./components/awards-comp/OutstandingServiceAward2019";
import AS_Arya_DisasterPreventionAward from "./components/awards-comp/AS_Arya_DisasterPreventionAward";
import GopalRanjanTechnologyAward from "./components/awards-comp/GopalRanjanTechnologyAward";
import HRED_HydroRenewableEnergyAward from "./components/awards-comp/HRED_HydroRenewableEnergyAward";
import HRED_RiverGangaRejuvenationAward from "./components/awards-comp/HRED_RiverGangaRejuvenationAward";
import KhoslaNationalAward from "./components/awards-comp/KhoslaNationalAward";
import MaheshVarmaTechnologyInnovationAward from "./components/awards-comp/MaheshVarmaTechnologyInnovationAward";
import OPJainMemorialStructuralDesignAward from "./components/awards-comp/OPJainMemorialStructuralDesignAward";
import ProfASAryaYoungEarthquakeEngineerAward from "./components/awards-comp/ProfASAryaYoungEarthquakeEngineerAward";
import ProfSRMehraMemorialAward from "./components/awards-comp/ProfSRMehraMemorialAward";
import DonorsCTA from "./components/esteemedDonors";
import GivingBackCTA from "./components/GivingBackCTA";
import AdminLogin from "./pages/Admin-Login";
import AdminLogout from "./pages/Admin-Logout";
import DirectorsMessage from "./components/DirectorsMessage";
import AlumniAwardShowcase from "./components/AlumniAwardShowcase";


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/givingback' element={<GivingBack />} />
        <Route path='/globalnetwork' element={<GlobalNetwork />} />
        <Route path='/snippets' element={<Snippets />} />
        <Route path='/reunions' element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jubilee-reunions" element={<JubileeReunions />} />
        <Route path='/Awards' element={<Awards />} />
        
        <Route path='/studentsvisitingabroad' element={<StudentsVisitingInstitutions />} />
        <Route path='/InternationalResearchInternships' element={<InternationalResearchInternships />} />
        <Route path='/conference' element={<GoodInternationalConferences />} />
        <Route path='/Schemes' element={<Schemes />} />
        <Route path='/newsoutreach' element={<NewsOutreach />} />
        <Route path='*' element={<Error />} />
        <Route path='/Admin' element={<AdminLogin />} />
        <Route path='/AdminLogout' element={<AdminLogout />} />
        <Route path='/AdminPanel/*' element={<AdminPanel />} />
        <Route path='/Dora_Office' element={<Dora_Office />} />
        <Route path="/directorsmessage" element={< DirectorsMessage/>} />
        <Route path="/alumniawardshowcase" element={< AlumniAwardShowcase/>} />
        <Route path='/topdonors' element={<DonorsCTA />} />
        <Route path='/Givingbackcta' element={<GivingBackCTA />} />
        <Route path="/awards/daa-dyya-2019" element={<DAA_DYAA2019 />} />
        <Route path="/awards/daa-2019" element={<DAA_2019 />} />
        <Route path="/awards/daa-2018" element={<DAA_2018 />} />
        <Route path="/awards/outstanding-service-award-2019" element={<OutstandingServiceAward2019 />} />
        <Route path="/awards/as-arya-disaster-prevention-award" element={<AS_Arya_DisasterPreventionAward />} />
        <Route path="/awards/gopal-ranjan-technology-award" element={<GopalRanjanTechnologyAward />} />
        <Route path="/awards/hred-hydro-renewable-energy-award" element={<HRED_HydroRenewableEnergyAward />} />
        <Route path="/awards/hred-river-ganga-rejuvenation-award" element={<HRED_RiverGangaRejuvenationAward />} />
        <Route path="/awards/khosla-national-award" element={<KhoslaNationalAward />} />
        <Route path="/awards/mahesh-varma-technology-innovation-award" element={<MaheshVarmaTechnologyInnovationAward />} />
        <Route path="/awards/op-jain-memorial-structural-design-award" element={<OPJainMemorialStructuralDesignAward />} />
        <Route path="/awards/prof-a-s-arya-young-earthquake-engineer-award" element={<ProfASAryaYoungEarthquakeEngineerAward />} />
        <Route path="/awards/prof-s-r-mehra-memorial-award" element={<ProfSRMehraMemorialAward />} />       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

