const express = require("express");
const router = express.Router();
const upload = require("../Uploadmiddleware/upload");

const PropertyController = require("../Controllers/Property.controller");

/*
 * method: GET
 * Description: Get a list of all propertys
 */
router.get("/", PropertyController.getAllPropertys);

/*
 * method: POST
 * Description: Create a new property
 */
router.post("/", upload.single("image"), PropertyController.createNewProperty);

/*
 * method: GET
 * Description: Get a property by id
 */
router.get("/:id", PropertyController.findPropertyById);

/*
 * method: PATCH
 * Description: Update a property by id
 */
router.patch("/:id",upload.single('image'), PropertyController.updateAProperty);

/*
 * method: DELETE
 * Description: Delete a property by id
 */
router.delete("/:id", PropertyController.deleteAProperty);

module.exports = router;
