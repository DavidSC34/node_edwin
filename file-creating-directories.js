const fs = require('fs');//es una b uena practica poner elnombre de la const con el del modulo

fs.exists('views',(erroDir)=>{

    if(erroDir) return erroDir;
     //Ya que es un metodo  asincrono(no bloqueable), es importante poner una funcion callback
     fs.mkdir("views",(err)=>{
        if (err) return err;
        
        fs.writeFile("./views/new.html","This is a new directory and data",(err)=>{
                if (err) return err;
                console.log('Directory and file saved');
        });
    
    });

}) 
    
   



