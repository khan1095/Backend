import express from 'express'
import path from 'path'
const app = express()
const port =3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')));

//setting up ejs pages
          // install ejs from npm
          //  setup ejs as a view engine
app.set('view engine','ejs')


app.get('/', (req, res) => {
    let sitename="Khan"
    let searchText="search now"
  res.render('index')
})

app.get('/profile/:userName', function (req, res) {
    res.send(`Welecome,  ${req.params.userName}!`)
})

app.get('/author/:userName/:age', (req, res) => {
    res.send(`The author is ${req.params.userName} of age ${req.params.age}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})