const express = require('express');
const app = express();
const PORT = 3000; 

// route to handle GET requests
app.get('/', (req, res) => {
    res.json({
        city: "Rawalpindi",
        state: "Punjab",
        country: "Pakistan",
        slack_id: "U079EQY9X1D",
        extra: "Check out my portfolio at https://www.irtaza.xyz/portfolio/ 😁!"
    });
});

// /api route to handle GET requests
app.get('/api', (req, res) => {
    res.json({
        city: "Rawalpindi",
        state: "Punjab",
        country: "Pakistan",
        slack_id: "U079EQY9X1D",
        extra: "Check out my portfolio at https://www.irtaza.xyz/portfolio/ 😁!"
    });
});

// starting the server
app.listen(PORT, () => {
    console.log(`API is running at http://localhost:${PORT}`);
});
