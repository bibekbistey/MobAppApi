import { Col, Form, Input, Row, TimePicker, message } from "antd";
import axios from "axios";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import Layout from "./../components/Layout";
const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-doctor",
        {
          ...values,
          userId: user._id,
          timings: [
            moment(values.timings[0]).format("HH:mm"),
            moment(values.timings[1]).format("HH:mm"),
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrrong ");
    }
  };
  return (
    <Layout>
      <h1 className="text-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your clinic address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Fees Per Cunsaltation"
              name="feesPerCunsaltation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;



// import { Col, Form, Input, Row, TimePicker, message } from "antd";
// import axios from "axios";
// import moment from "moment";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
// import Layout from "./../components/Layout";


// const ApplyDoctor = () => {
//   const { user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // handle form
//   const handleFinish = async (values) => {
//     try {
//       dispatch(showLoading());
//       const res = await axios.post(
//         "/api/v1/user/apply-doctor",
//         {
//           ...values,
//           userId: user._id,
//           timings: [
//             moment(values.timings[0]).format("HH:mm"),
//             moment(values.timings[1]).format("HH:mm"),
//           ],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (res.data.success) {
//         message.success(res.data.message);
//         navigate("/");
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
//     <Layout>
//       <h1 class="text-4xl font-bold text-center text-blue-800 mb-8">Apply for Doctor</h1>

//       <Form layout="vertical" onFinish={handleFinish} className="m-3">
//         {/* <h4 className="">Add Personal Details</h4><br></br> */}
//         <h4 class="text-2xl font-bold text-red-800 mb-4">Add Personal Details</h4>

//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">First Name</span>}
//               name="firstName"
//               // required
//               rules={[{ required: true }]}
//               className="mb-6"
//             >
//               <Input
//                 type="text"
//                 placeholder="Your first name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">Last Name</span>}
//               name="lastName"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="text"
//                 placeholder="Your last name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">Phone Number</span>}
//               name="phone"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="text"
//                 placeholder="Your contact no"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">Email</span>}
//               name="email"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="email"
//                 placeholder="Your email address"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label={<span className="italic">Website</span>} name="website">
//               <Input
//                 type="text"
//                 placeholder="Your website"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">Address</span>}
//               name="address"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="text"
//                 placeholder="Your clinic address"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//         </Row>
//         <br></br>
//         <h4 class="text-2xl font-bold text-red-800 mb-4">Add Professional Details</h4>
//         <br></br>
//         <Row gutter={20}>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">Specialization</span>}
//               name="specialization"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="text"
//                 placeholder="Your specialization"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">Experience</span>}
//               name="experience"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="text"
//                 placeholder="Your experience"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item
//               label={<span className="italic">FeesPerConsultation</span>}
//               name="feesPerConsultation"
//               required
//               rules={[{ required: true }]}
//             >
//               <Input
//                 type="text"
//                 placeholder="Your contact no"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}>
//             <Form.Item label={<span className="italic">Timings</span>} name="timings" required>
//               <TimePicker.RangePicker
//                 format="HH:mm"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//               />
//             </Form.Item>
//           </Col>
//           <Col xs={24} md={24} lg={8}></Col>
//           <Col xs={24} md={24} lg={8}>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//             Submit
//           </button>
//           </Col>
//         </Row>
//       </Form>
//     </Layout>
//   );
// };

// export default ApplyDoctor;






