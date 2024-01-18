const fruits = require("../models/fruits");
const Fruit = require("../models/Fruit");

// "index" route
const fruitIndex = async (req, res) => {
  let data;
  try {
    data = await Fruit.find();
    console.log("data from mongo: ", data);
  } catch (err) {
    console.log("data eror", err);
  }
  res.render("folder/Index", { fruits: data });
};

// "new" route
const fruitNew = (req, res) => {
  res.render("New");
};

// "show" route
const fruitShow = async (req, res) => {
  console.log(req.params.id);
  //name = apple
  //name= apple , color:green, sort()
  const data = await Fruit.findById(req.params.id);
  console.log(data);
  res.render("Show", { fruit: data });
  // res.send(fruits[req.params.index])
};

// "create" route
const fruitCreate = async (req, res) => {
  // console.log(req.body)
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  console.log(req.body);

  try {
    const result = await Fruit.create(req.body);
    console.log("data saved ", result);
  } catch (err) {
    console.log("erro", err);
  }
  // fruits.push(req.body);
  res.redirect("/fruits");
};

// "edit" route
const fruitEdit = async (req, res) => {
  const data = await Fruit.findById(req.params.id);
  console.log(data);
  res.render("Edit", { fruit: data });
};

// "destroy" route
const fruitDelete = async (req, res) => {
  console.log("delete");
  await Fruit.findByIdAndDelete(req.params.id);
  // fruits.splice(req.params.id, 1);
  console.log("deleting");
  res.redirect("/fruits");
};

// "update" route
const fruitUpdate = async (req, res) => {
  console.log("update");
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // fruits[req.params.index] = req.body;
  try {
    await Fruit.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    console.log(`error` + error);
  }
  res.redirect(`/fruits/${req.params.id}`);
};

const fruitSeed = async (req, res) => {
  // delete all data from collection
  // add seed data to DB
  // deleteMany will clear everything
  console.log(`Deleting everything`);
  await Fruit.deleteMany();
  await Fruit.create(fruits);
  res.redirect("/fruits");
};
const fruitClear = async (req, res) => {
  // delete all data from collection
  // add seed data to DB
  // deleteMany will clear everything
  console.log(`Deleting everything`);
  await Fruit.deleteMany();
  res.redirect("/fruits");
};

module.exports = {
  fruitCreate,
  fruitDelete,
  fruitEdit,
  fruitIndex,
  fruitNew,
  fruitShow,
  fruitUpdate,
  fruitSeed,
  fruitClear,
};
