const mongoose = require("mongoose");

const schema = mongoose.Schema({
  "codigoCliente": Number,
  "nombre": String,
  "ultimaActualizacion": Date,
  "funcionalUltimaActualizacion": String,
  "bandera" : String,
  "estado" : String,
  "fechaActualizacionMaestro": Date,
  "tieneTiendaWeb": Boolean,
  "controladorSurtidores": String,
  "tieneMP": {
            type: Boolean,
            default: false
            },
  "tieneResumenWeb": {
            type: Boolean,
            default: false
            },
  "tieneAPPYPF": {
            type: Boolean,
            default: false
            },
  "tieneShellBox": {
            type: Boolean,
            default: false
            },
  "conexionTV": String,
  "email": String,
  "telefono": String,
});


export default mongoose.models.Cliente || mongoose.model("Cliente", schema);
