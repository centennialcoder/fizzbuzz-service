var http = require('http');
var url = require('url');
var fizzbuzz = require('./fizzbuzz');
var port = 80;

http.createServer(function (req, res) {
  var query = url.parse(req.url, true).query;
  var low = query.begin;
  var high = query.end;
  res.write('Fizzbuzz from ' + low + ' to ' + high + '\n');
  for(var i=low; i <= high; i++){
    res.write(fizzbuzz.fizzbuzz(i) + '\n');
    //console.log(fizzbuzz.fizzbuzz(i));
  }
  res.end();
}).listen(80);
