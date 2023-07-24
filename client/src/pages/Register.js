// // import React from "react";
// // import "../styles/RegiserStyles.css";
// // import { Form, Input, message } from "antd";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { showLoading, hideLoading } from "../redux/features/alertSlice";
// // const Register = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   //form handler
// //   const onfinishHandler = async (values) => {
// //     try {
// //       dispatch(showLoading());
// //       const res = await axios.post("/api/v1/user/register", values);
// //       dispatch(hideLoading());
// //       if (res.data.success) {
// //         message.success("Register Successfully!");
// //         navigate("/login");
// //       } else {
// //         message.error(res.data.message);
// //       }
// //     } catch (error) {
// //       dispatch(hideLoading());
// //       console.log(error);
// //       message.error("Something Went Wrong");
// //     }
// //   };
// //   return (
// //     <>
// //       <div className="form-container ">
// //         <Form
// //           layout="vertical"
// //           onFinish={onfinishHandler}
// //           className="register-form"
// //         >
// //           <h3 className="text-center">Register From</h3>
// //           <Form.Item label="Name" name="name">
// //             <Input type="text" required />
// //           </Form.Item>
// //           <Form.Item label="Email" name="email">
// //             <Input type="email" required />
// //           </Form.Item>
// //           <Form.Item label="Password" name="password">
// //             <Input type="password" required />
// //           </Form.Item>
// //           <Link to="/login" className="m-2">
// //             Already user login here
// //           </Link>
// //           <button className="btn btn-primary" type="submit">
// //             Register
// //           </button>
// //         </Form>
// //       </div>
// //     </>
// //   );
// // };

// // export default Register;





// // import { Form, Input, message } from "antd";
// // import axios from "axios";
// // import React from "react";
// // import { useDispatch } from "react-redux";
// // import { Link, useNavigate } from "react-router-dom";
// // import { hideLoading, showLoading } from "../redux/features/alertSlice";

// // const Register = () => {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const onFinishHandler = async (values) => {
// //     try {
// //       dispatch(showLoading());
// //       const res = await axios.post("/api/v1/user/register", values);
// //       dispatch(hideLoading());
// //       if (res.data.success) {
// //         message.success("Register Successfully!");
// //         navigate("/login");
// //       } else {
// //         message.error(res.data.message);
// //       }
// //     } catch (error) {
// //       dispatch(hideLoading());
// //       console.log(error);
// //       message.error("Something Went Wrong");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen">
// //       <div className="w-96 p-8 bg-white shadow-lg rounded-lg">
// //         <h3 className="text-center text-2xl font-semibold mb-6">Register Form</h3>
// //         <Form layout="vertical" onFinish={onFinishHandler}>
// //           <Form.Item label="Name" name="name">
// //             <Input type="text" required />
// //           </Form.Item>
// //           <Form.Item label="Email" name="email">
// //             <Input type="email" required />
// //           </Form.Item>
// //           <Form.Item label="Password" name="password">
// //             <Input type="password" required />
// //           </Form.Item>
// //           <Link to="/login" className="block mt-4 text-center text-blue-500 hover:underline">
// //             Already a user? Login here
// //           </Link>
// //           <button
// //             className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
// //             type="submit"
// //           >
// //             Register
// //           </button>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;



// import { Form, Input, message } from "antd";
// import axios from "axios";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";

// const Register = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onFinishHandler = async (values) => {
//     try {
//       dispatch(showLoading());
//       const res = await axios.post("/api/v1/user/register", values);
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success("Register Successfully!");
//         navigate("/login");
//       } else {
//         message.error(res.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//       message.error("Something Went Wrong");
//     }
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500"
//     >
//       <div className="w-full sm:w-96 p-8 bg-white shadow-lg rounded-lg">
//         <h3 className="text-center text-2xl font-bold text-blue-500 mb-6">Register Form</h3>
//         <Form layout="vertical" onFinish={onFinishHandler}>
//           <Form.Item label="Name" name="name">
//             <Input type="text" required />
//           </Form.Item>
//           <Form.Item label="Email" name="email">
//             <Input type="email" required />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input type="password" required />
//           </Form.Item>
//           <Link
//             to="/login"
//             className="block mt-4 text-center text-blue-500 hover:underline"
//           >
//             Already a user? Login here
//           </Link>
//           <button
//             className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full border-2 border-blue-600"
//             type="submit"
//           >
//             Register
//           </button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import { Form, Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background4.webp";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="w-full sm:w-96 p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-center text-2xl font-bold text-blue-500 mb-6">Register Form</h3>
        <Form layout="vertical" onFinish={onFinishHandler}>
          <Form.Item label={<span className="font-bold">Name</span>} name="name">
            <Input type="text" required className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700 font-bold italic" placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label={<span className="font-bold">Email</span>} name="email">
            <Input type="email" required className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700 font-bold italic" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item label={<span className="font-bold">Password</span>} name="password">
            <Input type="password" required className="border border-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700 font-bold italic" placeholder="Enter your password" />
          </Form.Item>
         
          <Link to="/login" className="block mt-4 text-center text-blue-500 hover:underline font-semibold">
            Already a user? Login here
          </Link>
          <button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full border-2 border-blue-600"
            type="submit"
          >
            Register
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
