"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
class UserService {
    getAllUsers() {
        return userRepository_1.default.getAll();
    }
    getUserById(id) {
        return userRepository_1.default.getById(id);
    }
    createUser(user) {
        return userRepository_1.default.create(user);
    }
    updateUser(id, user) {
        return userRepository_1.default.update(id, user);
    }
    deleteUser(id) {
        return userRepository_1.default.delete(id);
    }
}
exports.default = new UserService();
