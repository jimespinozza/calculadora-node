let controllercalculadora = require('./calculadoracontroller.js');
module.exports = function(app){

app.post('/Asumar',controllercalculadora.sumar);
app.post('/Arestar',controllercalculadora.restar);
app.post('/Amulti',controllercalculadora.multi);
app.post('/Adiv',controllercalculadora.div);

};  