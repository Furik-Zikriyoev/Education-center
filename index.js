const express = require('express')
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.static("public"))

app.use(function(_, response){
    response.sendFile(__dirname + "/public/index.html");
});



app.use(express.json())
app.use('/api', userRouter)
// app.get('/',function(req,res){
//     res.render('index');
// });
// app.listen(PORT, ()=>console.log('starting ${PORT}'))

// app.get('/',function(req,res){
//     res.sendFile('index.html');
// })
// app.use(express.static("index.html"))
app.listen(PORT)