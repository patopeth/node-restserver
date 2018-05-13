//obj global que corre todo el tiempo en node
// Puerto
//

//process.env.PORT = process.env.PORT !== undefined ? process.env.PORT : 8080;
process.env.PORT = process.env.PORT || 8080; //el obj este PORT es porque no sabes el puerto que
//te van a asignar al deployar

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
// 60 segundos * 60 minutos * 24 horas * 30 dias

//SEED de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//BASE DE DATOS
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;