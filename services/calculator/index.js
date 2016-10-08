module.exports = {
    calculator: {
        add: function(args) {
            var a = parseFloat(args.a)
            var b = parseFloat(args.b)

            return {
                result: a + b
            }
        },

        sub: function(args) {
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

            return {
                result: a / b
            }
        }
    }
}