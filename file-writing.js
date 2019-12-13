const fs  = require('fs');

fs.writeFile('./modules/data.html','Hello this file has just been created<br/>','utf8',(err)=>{
 
     if(err) return err;
     console.log("The file has been saved");  
});

fs.appendFile('./modules/data.html','<br/>E text has been appended<br/>','utf8',(err)=>{
 
    if(err) return err;
    console.log("The file has been saved");  
});