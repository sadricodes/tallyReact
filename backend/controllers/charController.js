const asyncHandler = require("express-async-handler");
const { NotBeforeError } = require("jsonwebtoken");
const Char = require("../models/charModel");

const getChars = asyncHandler(async (req, res) => {
  const chars = await Char.find();
  res.json(chars);
});

const createChars = asyncHandler(async (req, res) => {
  const { name, age, summary } = req.body;
  if (!name || !age || !summary) {
    res.status(400);
    throw new Error("Please fill all the fields");
  } else {
    const char = new Char({ writtenBy: req.user._id, name, age, summary });
    const createdChar = await char.save();
    res.status(201).json(createdChar);
  }
});

const getCharById = asyncHandler(async (req, res) => {
  const char = await Char.findById(req.params.id);

  if (char) {
    res.json(char);
  } else {
    res.status(404).json({ message: "Character not found" });
  }
});

const updateChars = asyncHandler(async (req, res) => {
  const { name, age, summary } = req.body;
  const char = await Char.findById(req.params.id);

  if (char.writtenBy.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }

  if (char) {
    char.name = name;
    char.age = age;
    char.summary = summary;

    const updatedChar = await char.save();
    res.json(updatedChar);
  } else {
    res.status(404);
    throw new Error("Character not found");
  }
});

const deleteChar = asyncHandler(async (req, res) => {
  const char = await Char.findById(req.params.id);

  if (char.writtenBy.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You cannot perform this action");
  }

  if (char) {
    await char.remove();
    res.json({ message: "Character removed" });
  } else {
    res.status(404);
    throw new Error("Character not found");
  }
});

module.exports = {
  getChars,
  createChars,
  getCharById,
  updateChars,
  deleteChar,
};
