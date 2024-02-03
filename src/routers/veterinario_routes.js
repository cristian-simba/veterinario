import {Router} from 'express'
import verificarAutenticacion from '../middlewares/autenticacion.js'
import {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
    recuperarPassword,
    comprobarTokenPasword,
    nuevoPassword,
} from "../controllers/veterinario_controller.js";
import { validacionVeterinario } from '../middlewares/validacionVeterinario.js';


const router = Router()

//publicas 
router.post("/login", (req, res) => {
    res.send('Bienvenido');});
router.post("/registro", registro);
router.get("/confirmar/123", (req, res) => {
    res.send('Confirmar Cuenta');});
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/123", comprobarTokenPasword);
router.post("/nuevo-password/123", nuevoPassword);


//privadas
router.get("/perfil", (req, res) => {
    res.send('Bienvenido Al Perfil');});
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get("/veterinario/:id",verificarAutenticacion ,detalleVeterinario);
router.put("/veterinario/:id",verificarAutenticacion ,actualizarPerfil);


export default router