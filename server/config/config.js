//obj global que corre todo el tiempo en node
// Puerto
//

//process.env.PORT = process.env.PORT !== undefined ? process.env.PORT : 8080;
process.env.PORT = process.env.PORT || 8080; //el obj este PORT es porque no sabes el puerto que
//te van a asignar al deployar