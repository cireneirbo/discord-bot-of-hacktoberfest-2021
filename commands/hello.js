function printHello() {
       return "Hello :)"; // keyword 'return' is crucial here to send back the string when the function is called.
}

module.exports.printHello = printHello; // this line exports the above code so you can import it into the 'index.js' file for use.