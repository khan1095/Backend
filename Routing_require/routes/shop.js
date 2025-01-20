const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
  res.send('Shops home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Shopping')
})

router.get('/shopping/:slug', (req, res) => {
  res.send(`shop for ${req.params.slug}`)
})

module.exports = router