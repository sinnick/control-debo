import {dbConnect} from '../../utils/mongoose'
import Cliente from "../../models/clientes"

dbConnect()

export default async function (req, res) {
const clientes = await Cliente.find()
res.json(clientes)
  // res.send('clientes ok ');
}