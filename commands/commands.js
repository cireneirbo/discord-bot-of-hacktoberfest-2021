let commandsList = function() {
    function printCommands() {
        msg.reply(`Commands: command this`);
    }
    
    //return an object that represents our new module
    return {
         showCommands: printCommands
    }
}(); // This is called an immediately invoked function definition, or IIFE