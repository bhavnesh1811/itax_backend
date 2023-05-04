const express = require("express");
const { ProfileModel } = require("../Models/profile.model");

const ProfileRouter = express.Router();

//Creating a single profile data
ProfileRouter.post("/create", async (req, res) => {
    try {
        const profile = new ProfileModel(req.body);
        await profile.save();
        // console.log(profiles);
        res.status(200).send({ msg: "Profile Added", "Added Data": profile });
    } catch (error) {
        res
        .status(401)
        .send({ msg: "Error in adding the profile data", err: error.message });
    }
});

//Reading all the profile data
ProfileRouter.get("/", async (req, res) => {
  try {
    const profiles = await ProfileModel.find();
    // console.log(profiles);
    res.status(200).send({ msg: "All Business Profiles data", data: profiles });
  } catch (error) {
    res
      .status(401)
      .send({ msg: "Error in getting the data", err: error.message });
  }
});

//Updating a single profile data
ProfileRouter.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProfileModel.findByIdAndUpdate(ID, payload);
    res.status(200).send({ msg: "Profile Updated" });
  } catch (error) {
    res
      .status(401)
      .send({ msg: "Error in updating the data", err: error.message });
  }
});

//Deleting a single profile data
ProfileRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProfileModel.findByIdAndDelete(ID);
    res.status(200).send({ msg: "Profile Deleted" });
  } catch (error) {
    res
      .status(401)
      .send({ msg: "Error in deleting the data", err: error.message });
  }
});

module.exports = { ProfileRouter };
