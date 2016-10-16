module.exports = {
    soap: {
        add: function(args) {
            var a = parseFloat(args.a)
            var b = parseFloat(args.b)

            return {
                result: a + b
            }
        },

        subtract: function(args) {
            var a = parseFloat(args.a)
            var b = parseFloat(args.b)

            return {
                result: a - b
            }
        },

        multiply: function(args) {
            var a = parseFloat(args.a)
            var b = parseFloat(args.b)

            return {
                result: a * b
            }
        },

        divide: function(args) {
            var a = parseFloat(args.a)
            var b = parseFloat(args.b)

            if (b === 0) {
                throw {
                    Fault: {
                        Code: {
                            Value: "soap:Sender",
                            Subcode: { value: "rpc:BadArguments" }
                        },
                        Reason: { Text: "Division by zero" }
                    }
                }
            }

            return {
                result: a / b
            }
        }
    }
}
