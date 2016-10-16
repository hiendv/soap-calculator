'use strict';

var soap = require('soap');
var url = 'http://localhost:8001/calculator?wsdl';

soap.createClient(url, (err, client) => {
  if (err) throw err;

  var service = client.describe().Calculator.soap;

  Object.keys(service).forEach(operation => {
    let a = Math.random() * 1000;
    let b = Math.random() * 2000;

    client[operation]({
      a: a,
      b: b
    }, (error, response, raw) => {
      if (error) {
        return console.log(operation);
      }

      console.log(a, operation, b, response);
    });
  });
});
