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

import fs from "fs";
/*



// Synchronous READ
const readData = fs.readFileSync("data.txt" , "utf8");
console.log(readData); 




// Synchronous WRITE
// If the file exist then its overwritten, else new file is created, and again if the new file is changed then its overwritten again.
fs.writeFileSync("myFile.txt" , "I am newly build file with overwritten data.");



// Synchronous UPDATE
fs.appendFileSync("myfile.txt" , "\nI have Been appended on myFile.txt");

// Synchronous DELETE
    // Remove(-rmSync : -rmdirSync :removes files and folders)
    // unlink(removes  only the file)


fs.unlinkSync("myfile.txt");

*/

// // Asynchronous READ
// fs.readFile("data.txt" , "utf8" , (error , data)=>{
//     if (error){
//         console.log(error);
//     }
//     console.log(data);
// });


// Difference in between Synchronous & Asynchronous 
    // Synchronous
        const result = fs.readFileSync("data.txt" , "utf8" );
        console.log(result);
        console.log("Hello in Sequence.");

    // Asynchronous
        fs.readFile("data.txt" , "utf8" , (error,datas) => {
            if(error){
                console.log(error);
            }
            console.log(datas);
        });
        console.log("Hello in sequence");

// Asynchronous WRITE
fs.writeFile("same.txt" , "Writing from asynchronous file." , (error,asyFile)=> {
    if(error){
        console.log(error);
    }
    console.log("File have been created successfully");

});

// Asynchronous Update
fs.appendFile("same.txt" , "Writing from asynchronous file." , (error,asyFile)=> {
    if(error){
        console.log(error);
    }
    console.log("File have been created successfully");

});


// Asynchronous DELETE
fs.rm("same.txt" , (error,asyFile)=> {
    if(error){
        console.log(error);
    }
    console.log("File deleted Successfully.");

});
