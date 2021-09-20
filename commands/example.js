function functionToSendToIndexDotJS() {
    // if you want to add any logic to your function, it would go here - before the 'return'
    let sum = 2+2;
    return "Sum: " + sum; // keyword 'return' is crucial here to send back the data when the function is called.
}

//this exports your function from this file. write the name of your function from above (functionToSendToIndexDotJS) after 'module.exports.' and after the assignment '=' as below shows
module.exports.functionToSendToIndexDotJS = functionToSendToIndexDotJS; // this line exports the above code so you can import it into the 'index.js' file for use.

// in 'index.js', you will import your file ('example.js' (for this file only)), see directions at the top of 'index.js'