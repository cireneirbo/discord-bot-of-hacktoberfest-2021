let commandsList = function() {
    function printCommands() {
        msg.reply(`Commands: ${commands.join(', ')}`);
    }
    
    //return an object that represents our new module
    return {
         printCommands: printCommands
    }
}(); // This is called an immediately invoked function definition, or IIFE