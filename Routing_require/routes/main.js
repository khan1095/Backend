const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('main home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About main')
})
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpolst for ${req.params.slug}`)
})

module.exports = router