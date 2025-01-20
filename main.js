import express from 'express';
const app = express();
const port = 3000;

// app.use(express.static("public"))

// url=http://localhost:3000/blog/yunus?mode-dark&region-in
// req.params
// app.get('/blog/:slug',(req,res)=>{
//     res.send(`Hello ${req.params.slug}`)
// })

//req.query

app.get('/blog/:slug',(req,res)=>{
    console.log(req.query);
    res.send(`Hello ${req.params.slug}`)
    
})

// get request
app.get("/", (req, res) => {
    res.send("My name is khan");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// // post request
// app.post("/", (req, res) => {
//     res.send("My name is khan");
// });

// // put request
// app.put("/", (req, res) => {
//     res.send("This is put");
// });

