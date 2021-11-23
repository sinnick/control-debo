const md5 = require('md5');
const jwt = require('jsonwebtoken');
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


export default async (req, res) => {
    const {query: { usuario,password },method,} = req
  
    switch (method) {
    //   case 'GET':
    //       try {
    //       const resultado = await Cliente.findOne({codigoCliente: parseInt(codigoCliente)})
    //       res.status(200).json({ success: true, data: resultado })
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //   break;

        
    //   case 'PUT':
    //     try {
    //       const resultado = await Cliente.findOneAndUpdate(req.body)
    //       res.status(200).json({ success: true, data: resultado })
    //     } catch (error) {
    //       res.status(400).json({ success: false })
    //     }
    //   break;
      
      
      case 'POST':
        console.log('busco en base de datos')
        const {usuario,password} = req.body
        const resultado = await knex.raw(`select nick,contrasena from usuarios where nick="${usuario}"`)
        // console.log('resultado', resultado[0])
        if (resultado[0][0] ) {
            const pwBase = (resultado[0][0].contrasena)
            const userBase = (resultado[0][0].nick)
                if (userBase == usuario ) {
                    if(pwBase == md5(md5(password))) {
                        const token = jwt.sign({ usuario: usuario }, '1337', { expiresIn: '5m' });
                        res.status(200).json({ "msg": 'Login correcto', token: token })
                        console.log('login correcto')
                    } else {
                        res.status(200).json({ "msg": 'Contraseña incorrecta' })
                        console.log('contraseña incorrecta')
                    }
                } 
                // else {
                //     res.status(200).json({ msg: 'Usuario  incorrecto' })
                //     console.log('usuario incorrecto')
                // }

        } else {
            res.status(200).json({ msg: 'Usuario no encontrado' })
            console.log('usuario no encontrado ')
        }

        // console.log('usuario', usuario)
        // console.log('password', md5(md5(password)))
        // console.log('pwBase', pwBase)
        // console.log('userBase', userBase)

        

        // console.log('usuario', usuario)
        // console.log('password', md5(md5(password)))
        // console.log(`fmasso	6c781f85810c40afd1d4f89aa2ad3ad1`)

        // res.status(200).json({ success: true, data: {usuario,password} })
      break;


      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Metodo ${method} no permitido`)
    }
  }