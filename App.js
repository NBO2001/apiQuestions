require('dotenv').config()
const express = require('express');
const cors = require('cors');

const { question } = require('./Model');

const app = express();

const port = (process.env.PORT);

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});


app.get('/question', async (req, res) => {
    
    const data = await question();
    
    if(data){
        return res.send(data).status(200);
    }else{
        return res.status(400).json({
            erro: true
        });
    }


})

app.listen(port, () => {
    console.log("Server started in port ", port);
})