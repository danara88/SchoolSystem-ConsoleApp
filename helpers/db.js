const fs = require('fs');


const saveDB = ( dbPath = '', data = '' ) => {
 fs.writeFileSync(dbPath, data);
};


const readDB = ( dbPath='' ) => {
  const data = fs.readFileSync(dbPath, {coding: 'utf-8'});
  return JSON.parse(data);
};


module.exports = {
  saveDB,
  readDB
};
