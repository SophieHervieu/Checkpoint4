const express = require("express");

const app = express();

app.use(express.json());

// const multer = require("multer");

const router = express.Router();
// const models = require("./models");

// const itemControllers = require("./controllers/itemControllers");
const tattooArtistControllers = require("./controllers/tattooArtistControllers");
const cityControllers = require("./controllers/CityControllers");
const styleControllers = require("./controllers/styleControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/tattooArtist", tattooArtistControllers.findTattooArtist);
router.get("/tattooArtist/:id", tattooArtistControllers.read);
router.put("/tattooArtist/:id", tattooArtistControllers.edit);
router.post("/tattooArtist", tattooArtistControllers.add);
router.post("/tattooArtist", tattooArtistControllers.insertTattooartistInCity);
router.post("/tattooArtist", tattooArtistControllers.insertStyle);
router.delete("/tattooArtist/:id", tattooArtistControllers.destroy);

router.get("/city", cityControllers.findCity);
router.get("/city/:id", cityControllers.read);
router.put("/city/:id", cityControllers.edit);
router.post("/city", cityControllers.add);
router.delete("/city/:id", cityControllers.destroy);

router.get("/style", styleControllers.findStyle);
router.get("/style/:id", styleControllers.read);
router.put("/style/:id", styleControllers.edit);
router.post("/style", styleControllers.add);
router.delete("/style/:id", styleControllers.destroyStyle);

module.exports = router;
