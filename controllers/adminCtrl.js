const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({ isAdmin: false });
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "Doctors Data list",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting doctors data",
      error,
    });
  }
};



// doctor account status
// const changeAccountStatusController = async (req, res) => {
//   try {
//     const { doctorId, status } = req.body;
//     console.log(doctorId);
//     console.log(status);
//     const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
//     // const user = await userModel.findOne({ _id: doctorId });
//     const user = await userModel.findOne({ _id: doctor.userId });
//     user.isDoctor = status === "approved" ? true : false;
//     await user.save();
//     res.status(201).send({
//       success: true,
//       message: "Account Status Updated",
//       data: doctor,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Eror in Account Status",
//       error,
//     });
//   }
// };




// const changeAccountStatusController = async (req, res) => {
//   try {
//     const { doctorId, status } = req.body;
//     console.log("Doctor ID:", doctorId);
//     console.log("Status:", status);

//     // Update the status of the doctor using the doctorModel
//     const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
//     console.log("Doctor:", doctor);

//     // Check if a doctor was found and updated in the database
//     if (!doctor) {
//       return res.status(404).send({
//         success: false,
//         message: "Doctor not found",
//       });
//     }

//     // Find the associated user based on the doctor's userId
//     const user = await doctorModel.findOne({ userId: doctor.userId});
//     console.log("User:", user);

//     // Check if a user was found
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Update the isDoctor property of the user based on the status
//     user.isDoctor = status === "approved";
//     await user.save();

//     res.status(201).send({
//       success: true,
//       message: "Account Status Updated",
//       data: doctor,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in Account Status",
//       error,
//     });
//   }
// };

const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
    const user = await doctorModel.findOne({ userId: doctor.userId });
    // const notifcation = user.notifcation;
    // notifcation.push({
    //   type: "doctor-account-request-updated",
    //   message: `Your Doctor Account Request Has ${status} `,
    //   onClickPath: "/notification",
    // });
    user.isDoctor = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Account Status",
      error,
    });
  }
};


const deleteDoctorController = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const doctor = await doctorModel.findByIdAndDelete(doctorId);
    res.status(200).send({
      success: true,
      message: "Doctor deleted successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting doctor",
      error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findByIdAndDelete(userId);
    res.status(200).send({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting user",
      error,
    });
  }
};

module.exports = {
  getAllDoctorsController,
  getAllUsersController,
  changeAccountStatusController,
  deleteUserController,
  deleteDoctorController,
};
