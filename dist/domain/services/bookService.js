"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookRepository_1 = __importDefault(require("../repositories/bookRepository"));
class BookService {
    getAllBooks() {
        return bookRepository_1.default.getAll();
    }
    getBookById(id) {
        return bookRepository_1.default.getById(id);
    }
    createBook(book) {
        return bookRepository_1.default.create(book);
    }
    updateBook(id, book) {
        return bookRepository_1.default.update(id, book);
    }
    deleteBook(id) {
        return bookRepository_1.default.delete(id);
    }
}
exports.default = new BookService();
