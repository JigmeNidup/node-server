const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;
//middleware
app.use(cors());
app.use(express.json());

//
var data = [];

//routes
app.get('/', async (req,res) => {
    try {
        res.json(data);
    } catch (error) {
        console.error(error.message);
    }
})

app.post('/', async (req,res) =>{
    try {
        const {name, password} = req.body;
        const user = {name: name, password: password};
        data.push(user);
        res.json("true");
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(port, () =>{
    console.log(`Server started on Port ${port}`);
});