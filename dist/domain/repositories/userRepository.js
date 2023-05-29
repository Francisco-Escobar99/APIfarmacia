"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../infrastructure/database"));
class UserRepository {
    getAll() {
        return new Promise((resolve, reject) => {
            database_1.default.query('SELECT * FROM employees', (error, results) => {
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
            database_1.default.query('SELECT * FROM employees WHERE id = ?', [id], (error, results) => {
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
    create(user) {
        return new Promise((resolve, reject) => {
            database_1.default.query('INSERT INTO employees SET ?', user, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.insertId);
            });
        });
    }
    update(id, user) {
        return new Promise((resolve, reject) => {
            database_1.default.query('UPDATE employees SET ? WHERE id = ?', [user, id], (error, result) => {
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
            database_1.default.query('DELETE FROM employees WHERE id = ?', [id], (error, result) => {
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
exports.default = new UserRepository();
