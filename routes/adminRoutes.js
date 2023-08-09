const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
  deleteUserController,
  deleteDoctorController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

router.delete("/deleteUsers/:userId", authMiddleware, deleteUserController);
// router.delete("/deleteUsers", authMiddleware, deleteUserController);

router.delete("/deleteDoctors/:doctorId", authMiddleware, deleteDoctorController);


//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
