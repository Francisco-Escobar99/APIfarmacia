"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../../domain/services/userService"));
const router = express_1.default.Router();
// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await userService_1.default.getAllUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});
// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const user = await userService_1.default.getUserById(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});
// Crear un usuario
router.post('/', async (req, res) => {
    const user = req.body;
    try {
        const createdUserId = await userService_1.default.createUser(user);
        res.json({ id: createdUserId });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});
// Actualizar un usuario
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = req.body;
    try {
        const success = await userService_1.default.updateUser(id, user);
        if (success) {
            res.json({ message: 'usuario actualizado exitosamente' });
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});
// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const success = await userService_1.default.deleteUser(id);
        if (success) {
            res.json({ message: 'usuario eliminado exitosamente' });
        }
        else {
            res.status(404).json({ error: 'usuario no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});
exports.default = router;
