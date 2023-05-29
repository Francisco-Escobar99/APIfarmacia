"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookService_1 = __importDefault(require("../../domain/services/bookService"));
const router = express_1.default.Router();
// Obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const books = await bookService_1.default.getAllBooks();
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
});
// Obtener un libro por ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const book = await bookService_1.default.getBookById(id);
        if (book) {
            res.json(book);
        }
        else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
});
// Crear un libro
router.post('/', async (req, res) => {
    const book = req.body;
    try {
        const createdBookId = await bookService_1.default.createBook(book);
        res.json({ id: createdBookId });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el libro' });
    }
});
// Actualizar un libro
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const book = req.body;
    try {
        const success = await bookService_1.default.updateBook(id, book);
        if (success) {
            res.json({ message: 'Libro actualizado exitosamente' });
        }
        else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el libro' });
    }
});
// Eliminar un libro
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const success = await bookService_1.default.deleteBook(id);
        if (success) {
            res.json({ message: 'Libro eliminado exitosamente' });
        }
        else {
            res.status(404).json({ error: 'Libro no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
});
exports.default = router;
