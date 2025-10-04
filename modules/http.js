// http module is use to handle all the request and response from the internet

/* 

import http from "http";

// main work is to create server
http.createServer(); //just yeti lekhda server create hunxa


const app = http.createServer();

app.listen(5000);

*/

/*
// Sample code for sending a response  from backend 

import http from "http";
const apps = http.createServer((request, response) => { 
    // suppose we are sending simple hello world as a response to frontend
    response.writeHead(200, {"content-type" : "text/html"});
    response.end("<h1>Hello World</h1>");
});
apps.listen(5000 , () => {
    console.log("Server Started...");
});

*/

import http from "http";

const app = http.createServer((request,response) => {
    const data = {
        "name" : "Anish Pandit",
        "Contact" : 9811046759 ,
        "address" : "Dharan, Nepal"
    };
    response.writeHead(200 , {"content-type" : "application/json"});
    response.end(JSON.stringify(data));
});

app.listen(5000 , () => {
    console.log("Server Started Successfully... ");
});
