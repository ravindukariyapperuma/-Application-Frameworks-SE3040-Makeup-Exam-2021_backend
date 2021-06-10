const mongoose = require("mongoose");

const Property = require("../Models/Property.model");

module.exports = {
  /*
   * method: GET
   * Description: Get a list of all propertys
   */
  getAllPropertys: async (req, res, next) => {
    try {
      const results = await Property.find();
      res.send(results);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: POST
   * Description: Create a new property
   */
  createNewProperty: async (req, res, next) => {
    try {
      const description = req.body.description;
      const price = req.body.price;
      const address = req.body.address;
      const city = req.body.city;
      const beds = req.body.beds;
      const baths = req.body.baths;
      const sqft = req.body.sqft;
      const booking = req.body.booking;
      const category = req.body.category;
      const hospital = req.body.hospital;
      const doctor = req.body.doctor;
      const owner = req.body.owner;
      const telnumber = req.body.telnumber;

      const property = new Property({
        description,
        price,
        address,
        city,
        beds,
        baths,
        sqft,
        booking,
        category,
        hospital,
        doctor,
        owner,
        telnumber,
      });
      if (req.file) {
        property.image = req.file.path;
      }

      const result = await property.save();
      res.status(201).send(result);
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: GET
   * Description: Get a property by id
   */
  findPropertyById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const property = await Property.findById(id);
      if (!property) {
        res.status(204).send("Empty Propertys");
      } else {
        res.status(200).send(property);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: PATCH
   * Description: Update a property by id
   */
  updateAProperty: async (req, res, next) => {
    try {
      const description = req.body.description;
      const price = req.body.price;
      const address = req.body.address;
      const city = req.body.city;
      const beds = req.body.beds;
      const baths = req.body.baths;
      const sqft = req.body.sqft;
      const booking = req.body.booking;
      const category = req.body.category;
      const hospital = req.body.hospital;
      const doctor = req.body.doctor;
      const owner = req.body.owner;
      const telnumber = req.body.telnumber;

      const property = {
        price,
        address,
        city,
        beds,
        baths,
        sqft,
        booking,
        category,
        hospital,
        doctor,
        owner,
        telnumber,
      };
      if (req.file) {
        property.image = req.file.path;
      }

      const id = req.params.id;
      const updates = property;
      const options = { new: true };
      const result = await Property.findByIdAndUpdate(id, updates, options);
      if (!result) {
        res.status(204).send("Property does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },

  /*
   * method: DELETE
   * Description: Delete a property by id
   */
  deleteAProperty: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Property.findByIdAndDelete(id);
      if (!result) {
        res.status(204).send("Property does not exist");
      } else {
        res.status(200).send(result);
      }
    } catch (error) {
      res.send(error);
    }
  },
};
