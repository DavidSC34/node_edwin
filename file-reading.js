const fs = require('fs');//Es beuna practica poner el modulo con el mismo nombre

fs.readdir('./',(err, content)=>{
    if (err) return err;
    console.log(content);
});

fs.readFile('global.html','UTF-8',(err, content)=>{

     console.log(content);
});