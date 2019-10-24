const express = require('express');
const app = express();

app.get('/api/timestamp/:date_string?', (req, res) => {
    let date
    if (!req.params.date_string) {
        date = new Date();
        res.send({
            "unix": date.getTime(), 
            "utc" : date.toUTCString()
        });
    }
    else if (!isNaN( new Date(req.params.date_string))) { 
        date = new Date(req.params.date_string); 
        res.send({
            "unix": date.getTime(), 
            "utc" : date.toUTCString()
        });
    } 
    else {
        res.send({"error" : "Invalid Date" })
        res.end();
    }
})

app.listen(3000);