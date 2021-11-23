import { connect, connection } from "mongoose";

const conn = {
    isConnected: false,
}


export async function dbConnect() {

    if (conn.isConnected) return;

    const db = await connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    conn.isConnected = db.connections[0].readyState;
    console.log(db.connection.db.databaseName);
}

connection.on('error', console.error.bind(console, 'error de conexion:'));
connection.on('connecting', () => {console.log('intentando conectar a MongoDB');});
connection.on('connected', () => {console.log(`conectado correctamente`);});