// load Models from DB
const Logs = require("../models/LogsModel");

// == INDEX == /logs :: GET
module.exports.index = async (req, res) => {
  // res.send('you are on logs index') // test
  let response;
  try {
    response = await Logs.find().sort({ createdAt: -1 });
    console.log(`Logs find()`, response);
  } catch (error) {
    console.log(`! Logs.find() error: `, error);
  }
  res.render("Index", { logsProp: response });
};

// == NEW == /logs/new :: GET
module.exports.new = (req, res) => {
  // res.send("new"); // test
  res.render("New");
};

// == SHOW == /logs/${log._id} :: GET req.params:index
module.exports.show = async (req, res) => {
  let response;
  try {
    response = await Logs.findById(req.params.index);
    console.log("Logs.findById: ", response);
  } catch (error) {
    console.log(`! Logs.findById error:`, error);
  }
  res.render("Show", { logsProp: response });
};

// == CREATE == /logs :: POST req.body{schema}
module.exports.create = async (req, res) => {
  // res.send("received"); // test
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  // res.send(req.body); // test
  try {
    let result = await Logs.create(req.body);
    console.log("data saved ", result);
  } catch (error) {
    console.log("MongoDB Create error: ", error);
  }
  res.redirect("/logs");
};

// == EDIT == /logs/${logsProp._id}/edit :: GET  req.params.index
module.exports.edit = async (req, res) => {
  let response;
  try {
    response = await Logs.findById(req.params.index);
    console.log("Logs.findById: ", response);
  } catch (error) {
    console.log(`! Logs.findById error:`, error);
  }
  res.render("Edit", { logsProp: response });
};

// == DELETE == /logs/${logsProp._id}?_method=DELETE :: POST req.params.index
module.exports.delete = async (req, res) => {
  try {
    await Logs.findByIdAndDelete(req.params.index);
    console.log(
      "Logs.findByIdAndDelete: " + Logs.findByIdAndDelete(req.params.index)
    );
  } catch (err) {
    console.log(`! Logs.findByIdAndDelete `, err.message);
  }
  res.redirect("/logs");
};

// == UPDATE == /logs/${logsProp._id}?_method=PUT :: POST req.params.index, req.body{schema}
module.exports.update = async (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false;
  try {
    await Logs.findByIdAndUpdate(req.params.index, req.body);
    console.log(
      "Logs.findByIdAndUpdate: " + Logs.findByIdAndDelete(req.params.index)
    );
  } catch (error) {
    console.log(error);
  }
  res.redirect(`/logs/${req.params.index}`);
};
