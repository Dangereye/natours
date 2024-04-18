const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 200,
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: { tours },
  });
};

exports.getTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 200,
    // data:  { tour }
  });
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { tour: newTour },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: { tour: '<Updated tour here...>' }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({ status: 'success', data: null });
};
