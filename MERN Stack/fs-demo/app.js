//  file write
//  const fs=require('fs');
//  fs.writeFileSync("student.text","name:juman");
//  console.log("file created successfully");


// file read
// const fs=require('fs');
// const data=fs.readFileSync("student.text","utf-8");
// console.log(data);



// file append
// const fs=require('fs');
// fs.appendFileSync("student.text","\n name:shuraim");
//  console.log("data Added successfully");



// delete file
// const fs=require('fs');
// fs.unlinkSync("student.text");
// console.log("file deleted successfully");



//synchronous file operation
//  const fs=require('fs');
//  const data=fs.readFileSync("student.text","utf-8");
//  console.log(data);
//  console.log("file read successfully");


//asyncchronous file operation
// const fs=require('fs');
// fs.readFile("student.text","utf-8",(err,data)=>{
//     if(err){
//         console.log("error reading file");
//     } 
//         console.log(data);
    
// });

// console.log("next operation");



const fs=require("fs");
const path=require("path");c
const filepath=path-JSON(_dirname,"data","student.txt");
const data=fs.readfileSync(filepath, "utf-8");

console.log(data);
