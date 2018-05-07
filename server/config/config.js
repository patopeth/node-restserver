//obj global que corre todo el tiempo en node
// Puerto
//

//process.env.PORT = process.env.PORT !== undefined ? process.env.PORT : 8080;
process.env.PORT = process.env.PORT || 8080; //el obj este PORT es porque no sabes el puerto que
//te van a asignar al deployar

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://patopeth:Ihsahn657@ds217360.mlab.com:17360/cafe'
}

process.env.URLDB = urlDB;