let express = require('express');

let app = express();
let port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log('listening on ' + port);
});

app.use(express.static('public'));