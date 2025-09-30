// Modules in Node.js
/*
    Modules in Node.js are fundamental components that promote code organization, reusability, and maintainability by encapsulating related functionalities.

    # FileSystem Module:
        ##Generally , how do we import things in traditional way is ...
            const http = require ("http");
            const Var_server = http.create .................

        ##Modern ways
            -"package.json" ma gaya ra edit garney ani 
                "name" : ..............
                "version" : ................
                .
                .
                .
                .
                "type" : "module"  //this is modern ways , module modern lekhinxa
                "type" : "commonjs" // generally traditional ma lekhna pardai na , yedi lekna maan lagyo vaney commonjs lekhnda hunxa

                import http from "http";

*/

/*

    // FILEHANDLING : File handling in JavaScript differs significantly between client-side (browser) and server-side (Node.js) environments due to security restrictions and available APIs.

    Clinet-Side(Browser) File Handling: The web browser cannot directly access the user's files on their hard drive. This is a security feature to protect users from malicious websites. Instead, all file interactions must be initiated by the user.

    Server-Side(Server Environment) File Handling: On a server using Node.js, JavaScript has full permission to read, write, and modify files on that server's file system. Node.js provides a built-in "file system" module, or fs, for this purpose.


*/

/*

    File Handling is done in two ways :-
        // Synchronously
            -means hapenning or existing at the smae time
            -in  computing , a synchronous process or operation must complete before the next one can begin
            
            EXAMPLE:-- READ , WRITE , UPDATE, DELETE

        // Asynchronously 
            -process or events that do not exists or occur at the same time
            -it is a programming modeml that allows a program to initiate a task that takes a long time to complete and continue running other tasks while waiting for the result.

            EXAMPLE:-- READ , WRITE , UPDATE , DELETE
            
*/






