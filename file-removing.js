const fs = require('fs');//buena practica poner el nombre de la constante como el modulo importado

//fs.rmdirSync('./newDir'); // Si no esta vacio el directorio lo borra

//fs.unlinkSync('./newDir/newFile.js'); // para borrar o remover un archivo


try {
    fs.unlinkSync('./newDir/newFile.js');
} catch (error) {
    console.log(error +' this is the error');
}