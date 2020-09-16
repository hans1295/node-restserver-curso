 // process es un objeto global que siempre esta corriendo y siendo actualizado

 // ============================
 //   Puerto
 // ============================

 process.env.PORT = process.env.PORT || 3000;

 // ============================
 //   Entorno
 // ============================

 process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; // si no existe process entonces estoy en desarrollo

 // ============================
 //   Base de datos
 // ============================

 let urlDB;

 if (process.env.NODE_ENV === 'dev') {

     urlDB = 'mongodb://localhost:27017/cafe';

 } else {

     urlDB = 'mongodb+srv://strider:k2NGGmxybvrE4gO9@cluster0.cjgyf.mongodb.net/cafe';

 }
 process.env.URLDB = urlDB;