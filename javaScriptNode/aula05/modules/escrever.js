const fs = require('fs').promises;
module.exports = (caminho,dados) => {

    fs.writeFile(caminho,dados,{flag:'a',encoding:'utf-8'});
};


