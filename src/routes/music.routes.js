const express = require('express')

const router = express.Router()

const musiController = require("../controllers/music.controller")
const checkMiddleware = require("../middlewares/check.middleware ")


router.get('/', musiController.allAlbums)

.get("/:id", checkMiddleware.checkParam, musiController.createAlbum)


.delete('/:id', musiController.deleteAlbum)


module.exports = router