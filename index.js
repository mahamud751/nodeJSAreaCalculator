const express= require('express')
const bodyParser = require('body-parser')
const app= express()

const PORT= 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    // res.send('Hello pino')
    res.sendFile(__dirname +'/index.html')
})
app.get('/circle',(req,res)=>{
    // res.send('Hello pino')
    res.sendFile(__dirname +'/circle.html')
})
app.get('/triangle',(req,res)=>{
    // res.send('Hello pino')
    res.sendFile(__dirname +'/triangle.html')
})
app.post('/triangle',(req,res)=>{
    const height= req.body.height
    const base = req.body.base
    const area=0.5 * height * base
    res.send(`<h2>Triangle area is: ${area}</h2>`)
})
app.post('/circle',(req,res)=>{
    const radius= req.body.radius
    const area=Math.PI* radius * radius
    res.send(`<h2>Circle area is: ${area}</h2>`)
})

app.listen(PORT,()=>{
    console.log(`server start with http://localhost:${PORT}`)
})