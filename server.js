const express = require('express');
const app = express();
const router = require('./routers/router');

app.use('/', router);
app.use(express.json());

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else console.log('app start on 3000');
})