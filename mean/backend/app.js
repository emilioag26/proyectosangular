const express =require('express')

const app = express()

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With , Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    next();
})

app.use('/api/posts',(req,res,next)=>{
    const posts = [
        {
            id: 'a',
            title: 'first server side post',
            content: 'coming from the server'
        },
        {
            id: 'aadwadawd',
            title: 'second server side post',
            content: 'coming from the server'
        }
    ]
    res.json({
        message: 'Hello from server',
        content: posts
    })
})

module.exports = app