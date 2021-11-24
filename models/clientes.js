const mongoose = require("mongoose");

const schema = mongoose.Schema({
  "codigoCliente": "",
  "nombre": "",
  "ultimaActualizacion": Date,
  "funcionalUltimaActualizacion": "",
  "datosExtendidos": {}
});


export default mongoose.models.Cliente || mongoose.model("Cliente", schema);
