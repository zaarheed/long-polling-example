var http = require('http');
var path = require('path');
var express = require('express');
var router = express();
var server = http.createServer(router);

router.use('/client', express.static(path.resolve(__dirname, 'client')));

router.get('/data', function(req, res, next) {

  const time = (new Date()).getTime();
  
  let seconds = Math.random() * 10000;
  
  if (seconds < 1000) {
    return res.json({hasValue: false, value: null});
  }
  
  if (seconds > 8000) {
    seconds = 60000;
  }
  
  console.log("waiting seconds before responding", seconds);
  
  return setTimeout(function () {
    return res.json({hasValue: true, value: time});
  }, seconds);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
