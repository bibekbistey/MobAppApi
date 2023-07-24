// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "./../components/Layout";
// import moment from "moment";
// import { Table } from "antd";

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([]);

//   const getAppointments = async () => {
//     try {
//       const res = await axios.get("/api/v1/user/user-appointments", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setAppointments(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAppointments();
//   }, []);

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "_id",
//     },
//     // {
//     //   title: "Name",
//     //   dataIndex: "name",
//     //   render: (text, record) => (
//     //     <span>
//     //       {record.doctorInfo.firstName} {record.doctorInfo.lastName}
//     //     </span>
//     //   ),
//     // },
//     // {
//     //   title: "Phone",
//     //   dataIndex: "phone",
//     //   render: (text, record) => <span>{record.doctorInfo.phone}</span>,
//     // },
//     {
//       title: "Date & Time",
//       dataIndex: "date",
//       render: (text, record) => (
//         <span>
//           {moment(record.date).format("DD-MM-YYYY")} &nbsp;
//           {moment(record.time).format("HH:mm")}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//   ];

//   return (
//     <Layout>
//       <h1>Appoinmtnets Lists</h1>
//       <Table columns={columns} dataSource={appointments} />
//     </Layout>
//   );
// };

// export default Appointments;


import { Table } from "antd";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const res = await axios.get("/api/v1/user/user-appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setAppointments(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      className: "text-gray-800",
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span className="text-gray-800">
          {moment(record.date).format("DD-MM-YYYY")} &nbsp;
          {moment(record.time).format("HH:mm")}
        </span>
      ),
      className: "text-gray-800",
    },
    {
      title: "Status",
      dataIndex: "status",
      className: "text-gray-800",
    },
  ];

  return (
    <Layout>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold mb-4">Appointments List</h1>
      </div>
      <Table
        className="w-full border border-gray-800"
        columns={columns}
        dataSource={appointments}
      />
    </Layout>
  );
};

export default Appointments;



// import { Table, Space } from "antd";
// import axios from "axios";
// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import Layout from "./../components/Layout";

// const Appointments = () => {
//   const [appointments, setAppointments] = useState([]);

//   const getAppointments = async () => {
//     try {
//       const res = await axios.get("/api/v1/user/user-appointments", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setAppointments(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAppointments();
//   }, []);

//   const approveAppointment = (id) => {
//     // Implement your approve appointment logic here
//   };

//   const rejectAppointment = (id) => {
//     // Implement your reject appointment logic here
//   };

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "_id",
//       className: "text-gray-800",
//     },
//     {
//       title: "Date & Time",
//       dataIndex: "date",
//       render: (text, record) => (
//         <span className="text-gray-800">
//           {moment(record.date).format("DD-MM-YYYY")} &nbsp;
//           {moment(record.time).format("HH:mm")}
//         </span>
//       ),
//       className: "text-gray-800",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       className: "text-gray-800",
//     },
//     {
//       title: "Actions",
//       dataIndex: "_id",
//       render: (id) => (
//         <Space size="middle">
//           <button
//             className="text-green-600 bg-green-100 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-300 focus:outline-none focus:ring focus:ring-green-300"
//             onClick={() => approveAppointment(id)}
//           >
//             Approve
//           </button>
//           <button
//             className="text-red-600 bg-red-100 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-300"
//             onClick={() => rejectAppointment(id)}
//           >
//             Reject
//           </button>
//         </Space>
//       ),
//       className: "text-gray-800",
//     },
//   ];

//   return (
//     <Layout>
//       <div className="flex justify-center">
//         <h1 className="text-2xl font-bold mb-4">Appointments List</h1>
//       </div>
//       <div className="table-container">
//         <Table
//           className="w-full border border-gray-800"
//           columns={columns}
//           dataSource={appointments}
//           pagination={false}
//         />
//       </div>
//     </Layout>
//   );
// };

// export default Appointments;

