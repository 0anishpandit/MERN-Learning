import url from "url";

const  coder_url = "https://www.youtube.com/watch?v=qB2j5FhfOd4&list=RDqB2j5FhfOd4&start_radio=1"

const urlObject = new URL(coder_url); //for gettig the details of the urls 
console.log(urlObject);

console.log(urlObject.hostname); //yesari single single pani nikalna milxa , like hostname 