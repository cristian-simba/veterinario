//Importar express
//ESMODELES
import  express from "express";
import dotenv from 'dotenv'
import cors from 'cors';
import routerVeterinarios from './routers/veterinario_routes.js'
import routerPacientes from './routers/paciente_routes.js'
import routertratamiento from './routers/tratameinto_routes.js'

dotenv.config()

const app = express()



// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())


// Variables globales


// Rutas 
app.use('/api',routerVeterinarios)
app.use('/api',routerPacientes)
app.use('/api',routertratamiento)
app.use('/loaderio-77108048040110615f0c4d545f624fe9/', (req, res) => {
    // Manejar la solicitud de loader.io si es necesario
    res.send('loaderio verification token');
  });
  
// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

// Exportar la instancia de express por medio de app
export default  app