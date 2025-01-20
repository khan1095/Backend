import express from "express";
const app = express()

// app.get(route,request handler)
app.get('/', function (req, res){
    res.send("khan yunus")
})

app.get('/profile', (req,res) => {
    res.send('yunus mohammad')
    return next(new Error("Error Occured"))
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('something broke!')
})

app.listen(3000);

//cookie -> data saved at frontend
// session -> connected process 

