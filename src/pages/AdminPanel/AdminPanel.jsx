import React from 'react';
import { Route, Routes, NavLink, Navigate } from 'react-router-dom';
import AdminTopDonars from './AdminTopDonars';
import AdminTestimonial from './Admin-Testimonial';
import AdminEvent from './Admin-Event';
import AdminDoraTeam from './AdminDoraTeam';
import AdminAboutDora from './AdminAboutDora';
import PdfAdmin from './Pdf-Admin';
import { useAuth } from './store/auth';
import Loading from '../../assets/loading.gif';
import { AdminUsers } from './AdminUser';
import { AdminUpdate } from './AminUptade'




const Sidebar = () => {
  
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-screen fixed top-[110px] left-0 z-50">
      <div className="p-4 font-bold text-xl border-b border-gray-700">Admin Panel</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
        <li>
            
            <NavLink
              to="/AdminPanel/Users"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              Users
            </NavLink>
          </li>
          <li>

            <NavLink
              to="/AdminPanel/top-donors"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              AdminTopDonors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/testimonial"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              AdminTestimonial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/event"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              AdminEvent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/dora-team"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              AdminDoraTeam
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/about-dora"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              AdminAboutDora
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AdminPanel/pdf-admin"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${isActive ? 'bg-gray-600' : 'hover:bg-gray-700'}` 
              }
            >
              PDF
            </NavLink>
          </li>
          <li>
           
          </li>
        </ul>
      </nav>
    </div>
  );
};

const AdminPanel = () => {
  const { user, isLoading } = useAuth();


  if (isLoading) {
    return (
        <div className="w-screen h-screen flex align-middle justify-center items-center bg-white">
            <img src={Loading} alt="Loading" />
        </div>
    );
}

if (!user.isAdmin) {
    return <Navigate to="/" />;
}

console.log("admin layout", user);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-0 md:ml-64 mt-[110px]">
        <Routes>
          <Route path="top-donors" element={<AdminTopDonars />} />
          <Route path="testimonial" element={<AdminTestimonial />} />
          <Route path="event" element={<AdminEvent />} />
          <Route path="dora-team" element={<AdminDoraTeam />} />
          <Route path="about-dora" element={<AdminAboutDora />} />
          <Route path="pdf-admin" element={<PdfAdmin />} />
          <Route path="Users" element={<AdminUsers />} />
          <Route path='users/:id/edit' element={< AdminUpdate />} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminPanel;
