import Head from 'next/head'
import {dbConnect} from '../utils/mongoose'
import Cliente from "../models/clientes"


export async function getStaticProps() {

dbConnect()

const clientes = JSON.stringify(await Cliente.find())
  return {
    props: {
        clientes
  }
}
}

export default function Clientes({clientes}) {

    let parseados = JSON.parse(clientes)
    return (
        <>
         <Head>
        <title>Clientes</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-gray-900 p-5">
            <h1 className="text-white font-bold text-3xl text-center justify-center">Clientes</h1>
            <ul>
                {parseados.map(cliente => (
                 cliente.estado === "Habilitado" ? 
                    <li key={cliente._id} className="text-green-500 font-bold">{cliente.codigoCliente}  -   {cliente.nombre}</li> : 
                    <li key={cliente._id} className="text-red-500 font-bold">{cliente.codigoCliente}    -   {cliente.nombre}</li>


                ))}
            
            </ul>
        </div>
        </>
    )
    }