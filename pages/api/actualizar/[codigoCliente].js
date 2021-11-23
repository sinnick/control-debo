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
          //   let resultado = await Cliente.findOneAndUpdate({codigoCliente: parseInt(codigoCliente)},
          //   {ultimaActualizacion: new Date(),
          //   functionalUltimaActualizacion: id_usuario,
          //   })
          // console.log('resultado',resultado) 
          // // resultado.save()
          // res.status(200).json({ success: true, data: resultado })
          let doc = await Cliente.findOne({codigoCliente: parseInt(codigoCliente)})
          
          doc.overwrite({
            _id: doc._id,
            codigoCliente: doc.codigoCliente,
            nombre: doc.nombre,
            ultimaActualizacion: new Date(),
            functionalUltimaActualizacion: id_usuario
          })
        
          res.status(200).json({ success: true, data: doc })
          
          
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
