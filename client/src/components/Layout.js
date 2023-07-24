// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Badge, message } from "antd";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();
//   // logout funtion
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");
//   };

//   // =========== doctor menu ===============
//   const doctorMenu = [
//     {
//       name: "Home",
//       path: "/",
//       icon: "fa-solid fa-house",
//     },
//     {
//       name: "Appointments",
//       path: "/doctor-appointments",
//       icon: "fa-solid fa-list",
//     },

//     {
//       name: "Profile",
//       path: `/doctor/profile/${user?._id}`,
//       icon: "fa-solid fa-user",
//     },
//   ];
//   // =========== doctor menu ===============

//   // redering menu list
//   const SidebarMenu = user?.isAdmin
//     ? adminMenu
//     : user?.isDoctor
//     ? doctorMenu
//     : userMenu;
//   return (
//     <>
//       <div className="main">
//         <div className="layout">
//           <div className="sidebar">
//             <div className="logo">
//               <h6 className="text-light">DOC APP</h6>
//               <hr />
//             </div>
//             <div className="menu">
//               {SidebarMenu.map((menu) => {
//                 const isActive = location.pathname === menu.path;
//                 return (
//                   <>
//                     <div className={`menu-item ${isActive && "active"}`}>
//                       <i className={menu.icon}></i>
//                       <Link to={menu.path}>{menu.name}</Link>
//                     </div>
//                   </>
//                 );
//               })}
//               <div className={`menu-item `} onClick={handleLogout}>
//                 <i className="fa-solid fa-right-from-bracket"></i>
//                 <Link to="/login">Logout</Link>
//               </div>
//             </div>
//           </div>
//           <div className="content">
//             <div className="header">
//               <div className="header-content" style={{ cursor: "pointer" }}>
//                 <Badge
//                   count={user && user.notifcation.length}
//                   onClick={() => {
//                     navigate("/notification");
//                   }}
//                 >
//                   <i class="fa-solid fa-bell"></i>
//                 </Badge>

//                 <Link to="/profile">{user?.name}</Link>
//               </div>
//             </div>
//             <div className="body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Layout;




// import React from "react";
// import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Badge, message } from "antd";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");
//   };

//   // Doctor menu
//   const doctorMenu = [
//     {
//       name: "Home",
//       path: "/",
//       icon: "fa-solid fa-house",
//     },
//     {
//       name: "Appointments",
//       path: "/doctor-appointments",
//       icon: "fa-solid fa-list",
//     },
//     {
//       name: "Profile",
//       path: `/doctor/profile/${user?._id}`,
//       icon: "fa-solid fa-user",
//     },
//   ];

//   // Rendering menu list
//   const SidebarMenu = user?.isAdmin
//     ? adminMenu
//     : user?.isDoctor
//     ? doctorMenu
//     : userMenu;

//   return (
//     <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white shadow-md">
//         <div className="p-4">
//           <h6 className="text-2xl text-blue-600 font-bold">DOC APP</h6>
//           <hr className="my-4" />
//           <div className="space-y-2">
//             {SidebarMenu.map((menu) => {
//               const isActive = location.pathname === menu.path;
//               return (
//                 <div
//                   className={`flex items-center p-2 rounded-lg ${
//                     isActive ? "bg-blue-200" : ""
//                   }`}
//                 >
//                   <i className={`${menu.icon} mr-2 text-blue-600`}></i>
//                   <Link
//                     to={menu.path}
//                     className={`text-blue-600 ${
//                       isActive ? "font-bold" : ""
//                     }`}
//                   >
//                     {menu.name}
//                   </Link>
//                 </div>
//               );
//             })}
//             <div
//               className="flex items-center p-2 rounded-lg"
//               onClick={handleLogout}
//             >
//               <i className="fa-solid fa-right-from-bracket mr-2 text-blue-600"></i>
//               <Link to="/login" className="text-blue-600">
//                 Logout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Content */}
//       <div className="w-3/4 bg-white p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center">
//             <Badge
//               count={user && user.notifcation.length}
//               onClick={() => {
//                 navigate("/notification");
//               }}
//             >
//               <i className="fa-solid fa-bell text-blue-600"></i>
//             </Badge>
//             <Link to="/profile" className="text-blue-600 ml-2 font-bold">
//               {user?.name}
//             </Link>
//           </div>
//         </div>
//         {/* Body */}
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


// import React from "react";
// import { adminMenu, userMenu } from "./../Data/data";

// import { Badge, message } from "antd";
// import { useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Layout = ({ children }) => {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // logout function
//   const handleLogout = () => {
//     localStorage.clear();
//     message.success("Logout Successfully");
//     navigate("/login");
//   };

//   // Doctor menu
//   const doctorMenu = [
//     {
//       name: "Home",
//       path: "/",
//       icon: "fa-solid fa-house",
//     },
//     {
//       name: "Appointments",
//       path: "/doctor-appointments",
//       icon: "fa-solid fa-list",
//     },
//     {
//       name: "Profile",
//       path: `/doctor/profile/${user?._id}`,
//       icon: "fa-solid fa-user",
//     },
//   ];

//   // Rendering menu list
//   const SidebarMenu = user?.isAdmin
//     ? adminMenu
//     : user?.isDoctor
//     ? doctorMenu
//     : userMenu;

//   return (
//     // <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex">
//     <div className="bg-transparent min-h-screen flex">

//       {/* Sidebar */}
//       <div className="w-1/5 bg shadow-md">
//         <div className="p-4">
//           <h6 className="text-2xl text-blue-600 font-bold">MediBook</h6>
//           <hr className="my-4" />
//           <div className="space-y-2">
//             {SidebarMenu.map((menu) => {
//               const isActive = location.pathname === menu.path;
//               return (
//                 <div
//                   className={`flex items-center p-2 rounded-lg ${
//                     isActive ? "bg-blue-200" : ""
//                   }`}
//                 >
//                   <i className={`${menu.icon} mr-2 text-blue-600`}></i>
//                   <Link
//                     to={menu.path}
//                     className={`text-blue-600 ${
//                       isActive ? "font-bold" : ""
//                     }`}
//                   >
//                     {menu.name}
//                   </Link>
//                 </div>
//               );
//             })}
//             <div
//               className="flex items-center p-2 rounded-lg"
//               onClick={handleLogout}
//             >
//               <i className="fa-solid fa-right-from-bracket mr-2 text-blue-600"></i>
//               <Link to="/login" className="text-blue-600">
//                 Logout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Content */}
//       <div className="w-4/5 bg-white p-8 bg-[url('assets/background6.webp')] bg-cover">
//         {/* Header */}
//         <div className="flex justify-end items-center mb-4">
//           <div className="flex items-center">
//             <Badge
//               count={user && user.notifcation.length}
//               onClick={() => {
//                 navigate("/notification");
//               }}
//             >
//               <i className="fa-solid fa-bell text-blue-600"></i>
//             </Badge>
//             <Link to="/profile" className="text-blue-600 ml-2 font-bold">
//               {user?.name}
//             </Link>
//           </div>
//         </div>
//         {/* Body */}
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React from "react";
import { adminMenu, userMenu } from "./../Data/data";

import { Badge, message } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // Doctor menu
  const doctorMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];

  // Rendering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-1/5 bg shadow-md">
        <div className="p-4">
          <h6 className="text-2xl text-blue-600 font-bold">MediBook</h6>
          <hr className="my-4" />
          <div className="space-y-2">
            {SidebarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  key={menu.path}
                  className={`flex items-center p-2 rounded-lg ${
                    isActive ? "bg-blue-200" : ""
                  }`}
                >
                  <i className={`${menu.icon} mr-2 text-blue-600`}></i>
                  <Link
                    to={menu.path}
                    className={`${
                      isActive ? "font-bold" : ""
                    } hidden md:flex items-center text-blue-600`}
                  >
                    {menu.name}
                  </Link>
                </div>
              );
            })}
            <div
              className="flex items-center p-2 rounded-lg"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-right-from-bracket mr-2 text-blue-600"></i>
              <Link to="/login" className="text-blue-600">
                <span className={`${user ? "hidden md:inline" : "inline"}`}>
                  Logout
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-4/5 bg-white p-8 bg-[url('assets/background6.webp')] bg-cover bg-center bg-no-repeat">
  {/* Header */}
  <div className="flex justify-end items-center mb-4">
    <div className="flex items-center">
      <Badge
        count={user && user.notifcation.length}
        onClick={() => {
          navigate("/notification");
        }}
      >
        <i className="fa-solid fa-bell text-blue-600"></i>
      </Badge>
      <Link to="/profile" className="text-blue-600 ml-2 font-bold">
        {user?.name}
      </Link>
    </div>
  </div>

  {/* Body */}
  <div>{children}</div>
</div>

    </div>
  );
};

export default Layout;
