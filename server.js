'use strict'

const config = require('./config.json')

var soap = require('soap')
var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer()
server.listen(config.port)

var uri = 'http://localhost:' + config.port
console.log('Server is listening at ' + uri)

config.services.every((name) => {
    var service = {
        name: name,
        path: path.join(__dirname, './services', name),
        xml: null,
        handler: {}
    }
    service.xml = fs.readFileSync(path.join(service.path, './index.wsdl'), 'utf8')
    service.handler[name] = require(service.path)
    console.log('Service loaded: ' + name)

    soap.listen(server, '/' + name, service.handler, service.xml)
    console.log('SOAP Server: ' + uri + '/' + name)
})