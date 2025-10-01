import url from "url";

const  coder_url = "https://www.youtube.com/watch?v=qB2j5FhfOd4&list=RDqB2j5FhfOd4&start_radio=1&duration=25"


// yo ta sabai urls ma READ garna lai

const urlObject = new URL(coder_url); //for gettig the details of the urls 
console.log(urlObject);

console.log(urlObject.hostname); //yesari single single pani nikalna milxa , like hostname 


// we can even WRITE in urls
// lets add params
const params = new URLSearchParams(urlObject.search);
console.log(params);

params.set("duration" , "255");
console.log(params);

params.append("histoy" , "longlasting");
console.log(params);


// WE USE THE URLS PARAMS TO ADD IN THE URLS WHEN WE SEARCH IN THE WEBSITE