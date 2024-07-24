const express = require("express");
const path = require('path');


const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '\dist\projet-vagrant-frontend-m1-ibam\browser', 'index.html'));
});
// set port, listen for requests
//const PORT = process.env.PORT || 8080;
const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});