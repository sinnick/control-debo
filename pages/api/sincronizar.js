import {dbConnect} from '../../utils/mongoose'
import Cliente from "../../models/clientes"
const md5 = require('md5');
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "10.231.45.254",
      user: "focasf",
      password: "axF9RusS9B2dPE9E",
      database: "foca",
    },
    debug: false,
    port: 3306,
  });



export default  async (req,res) => {
    const {query, method,} = req

    dbConnect()
    const clientesMySQL = await knex.raw(`select codigo_cli, habilitado from anexo_cli`)
    // console.log(clientesMySQL[0])
    clientesMySQL[0].forEach(async (cliente) => {
        if (cliente.habilitado == 1) {
            let filter = {codigoCliente: cliente.codigo_cli}
            let update = {estado: 'Habilitado'}
            let options = {new: true}
            await Cliente.findOneAndUpdate(filter, update, options)
            console.log(`Cliente ${cliente.codigo_cli} habilitado`)
        } else {
            let filter = {codigoCliente: cliente.codigo_cli}
            let update = {estado: 'Deshabilitado'}
            let options = {new: true}
            await Cliente.findOneAndUpdate(filter, update, options)
            console.log(`Cliente ${cliente.codigo_cli} deshabilitado`)
        }
    })

    res.status(200).json({status: 'ok'})
    }