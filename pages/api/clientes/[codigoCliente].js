import {dbConnect} from '../../../utils/mongoose'
import Cliente from "../../../models/clientes"

dbConnect()


export default async (req, res) => {
    const {query: { codigoCliente },method,} = req
  
    switch (method) {
      case 'GET':
          try {
          const resultado = await Cliente.findOne({codigoCliente: parseInt(codigoCliente)})
          res.status(200).json({ success: true, data: resultado })
        } catch (error) {
          res.status(400).json({ success: false })
        }
      break;

        
      case 'PUT':
        try {
          const resultado = await Cliente.findOneAndUpdate(req.body)
          res.status(200).json({ success: true, data: resultado })
        } catch (error) {
          res.status(400).json({ success: false })
        }
      break;
      
      
      case 'POST':
        try {
          const resultado = await Cliente.create(req.body)
          res.status(200).json({ success: true, data: resultado })
        } catch (error) {
          res.status(400).json({ success: false })
        }
      break;


      default:
        res.setHeader('Allow', ['GET', 'PUT', 'POST'])
        res.status(405).end(`Metodo ${method} no permitido`)
    }
  }