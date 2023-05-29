"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../infrastructure/database"));
class BookRepository {
    getAll() {
        return new Promise((resolve, reject) => {
            database_1.default.query('SELECT * FROM books', (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            database_1.default.query('SELECT * FROM books WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (results.length === 0) {
                    resolve(null);
                }
                else {
                    resolve(results[0]);
                }
            });
        });
    }
    create(book) {
        return new Promise((resolve, reject) => {
            database_1.default.query('INSERT INTO books SET ?', book, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.insertId);
            });
        });
    }
    update(id, book) {
        return new Promise((resolve, reject) => {
            database_1.default.query('UPDATE books SET ? WHERE id = ?', [book, id], (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (result.affectedRows === 0) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            database_1.default.query('DELETE FROM books WHERE id = ?', [id], (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (result.affectedRows === 0) {
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
}
exports.default = new BookRepository();
