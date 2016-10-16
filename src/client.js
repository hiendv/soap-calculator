var soap = require('soap')
var url = 'http://localhost:8001/calculator?wsdl'

soap.createClient(url, (err, client) => {
    if (err) throw err

    var service = client.describe().Calculator.soap
    for (let operation in service) {
        let a = Math.random() * 1000
        let b = Math.random() * 2000
        client[operation]({
            a: a,
            b: b
        }, (error, response, raw) => {
            if (error) {
                console.log(operation)
                return
            }
            console.log(a, operation, b, response)
        })
    }
})