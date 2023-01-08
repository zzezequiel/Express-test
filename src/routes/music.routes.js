const express = require('express')

const router = express.Router()

const musiController = require("../controllers/music.controller")


router.get('/', musiController.allAlbums)

.post("/album", musiController.createAlbum)


.delete('/:id', musiController.deleteAlbum)


module.exports = router