const express = require('express')
const {genShortenUrl,getClicks,getRedirected} = require('../controllers/link')
const router = express.Router()

router.post('/',genShortenUrl)

router.get('/getClicks/:shortId',getClicks)

router.get('/:shortId',getRedirected)

module.exports = router