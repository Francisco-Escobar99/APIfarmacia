import express from 'express';
import UserService from '../../domain/services/userService';
import { User } from '../../domain/models/user';

const router = express.Router();

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const user = await UserService.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Crear un usuario
router.post('/', async (req, res) => {
  const user: User = req.body;

  try {
    const createdUserId = await UserService.createUser(user);
    res.json({ id: createdUserId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const user: User = req.body;

  try {
    const success = await UserService.updateUser(id, user);
    if (success) {
      res.json({ message: 'usuario actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const success = await UserService.deleteUser(id);
    if (success) {
      res.json({ message: 'usuario eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

export default router;
