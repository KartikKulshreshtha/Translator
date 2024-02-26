const express = require('express')
const router = express.Router()
const Translate = require('../controllers/translate')

router.use('/translate', Translate)


module.exports = router;