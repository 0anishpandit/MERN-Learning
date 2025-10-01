
import path from "path";
import url from "url";

const filePath = "codeit/courses/mern/day1/video.mp";

// basename() --gives file name
console.log(path.basename(filePath));

// dirname() --gives the path 
console.log(path.dirname(filePath));

// extname() --gives the extension
console.log(path.extname(filePath));

// parse - gives in structured way the details
console.log(path.parse(filePath));

// gives the current working director of ours , since we have used the modules in type so we need do check using url
const __filename = url.fileURLToPath(import.meta.url); //gives the current working file
console.log(__filename);
const __dirname = path.dirname(__filename); //gives the current working folder
console.log( __dirname);

