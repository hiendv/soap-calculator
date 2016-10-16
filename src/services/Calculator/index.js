module.exports = {
  soap: {
    add(args) {
      var a = parseFloat(args.a);
      var b = parseFloat(args.b);

      return {
        result: a + b
      };
    },

    subtract(args) {
      var a = parseFloat(args.a);
      var b = parseFloat(args.b);

      return {
        result: a - b
      };
    },

    multiply(args) {
      var a = parseFloat(args.a);
      var b = parseFloat(args.b);

      return {
        result: a * b
      };
    },

    divide(args) {
      var a = parseFloat(args.a);
      var b = parseFloat(args.b);

      if (b === 0) {
        throw new Error({
          Fault: {
            Code: {
              Value: "soap:Sender",
              Subcode: {
                value: "rpc:BadArguments"
              }
            },
            Reason: {
              Text: "Division by zero"
            }
          }
        });
      }

      return {
        result: a / b
      };
    }
  }
};
