var soap = require('soap')
var url = 'http://localhost:8001/calculator?wsdl'

soap.createClient(url, function (err, client) {
    if (err) throw err

    var service = client.describe().calculator.calculator

    for (var operation in service) {
        client[operation]({
            a: 1,
            b: 2
        }, function (error, response) {
            if (error) {
                throw error
            }
            console.log(response)
        })
    }
})