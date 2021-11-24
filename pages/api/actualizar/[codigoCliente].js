import {dbConnect} from '../../../utils/mongoose'
import Cliente from "../../../models/clientes"
// import { now } from 'mongoose'

dbConnect()

export default async (req, res)=>  {
    const {query: { codigoCliente, id_usuario },method,} = req
  
    switch (method) {
      case 'PUT':
        console.log('body',req.body)
          try {
            let resultado = await Cliente.findOneAndUpdate({codigoCliente: parseInt(codigoCliente)},
            {ultimaActualizacion: new Date(),
            funcionalUltimaActualizacion: req.body.id_usuario,
            datosExtendidos: {
                esypf : "mentira"
              }
            }, {new: true})

          console.log('resultado', resultado) 
          res.status(200).json({ success: true})
          
          
        } catch (error) {
          res.status(400).json({ success: false })
          console.log(error)
        }
      break;

        
    //   case 'PUT':
    //     try {
    //       const resultado = await Cliente.findOneAndUpdate(req.body)
    //       res.status(200).json({ success: true, data: resultado })
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //   break;
      
      
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


  //generate getstaticprops fucntion
    export async function getStaticProps(context) {
        const { params: { codigoCliente } } = context
        const cliente = await Cliente.findOne({ codigoCliente: parseInt(codigoCliente) })
        return {
            props: {
                cliente
            }
        }
    }
