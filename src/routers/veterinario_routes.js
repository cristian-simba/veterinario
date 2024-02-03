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
router.post("/login", login);
router.post("/registro",validacionVeterinario, registro);
router.get("/confirmar/loaderio-77108048040110615f0c4d545f624fe9", confirmEmail);
router.get("/veterinarios", listarVeterinarios);
router.get("/recuperar-password", recuperarPassword);
router.get("/recuperar-password/loaderio-77108048040110615f0c4d545f624fe9", comprobarTokenPasword);
router.post("/nuevo-password/loaderio-77108048040110615f0c4d545f624fe9", nuevoPassword);


//privadas
router.get("/perfil",verificarAutenticacion, perfil);
router.put('/veterinario/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get("/veterinario/:id",verificarAutenticacion ,detalleVeterinario);
router.put("/veterinario/:id",verificarAutenticacion ,actualizarPerfil);


export default router