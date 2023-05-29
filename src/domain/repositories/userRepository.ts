import connection from '../../infrastructure/database';
import { User } from '../models/user';

class UserRepository {
  getAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM employees', (error: any, results: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }

  getById(id: number): Promise<User | null> {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM employees WHERE id = ?', [id], (error: any, results: any) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length === 0) {
          resolve(null);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  create(user: User): Promise<number> {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO employees SET ?', user, (error: any, result: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result.insertId);
      });
    });
  }

  update(id: number, user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE employees SET ? WHERE id = ?', [user, id], (error: any, result: any) => {
        if (error) {
          reject(error);
          return;
        }
        if (result.affectedRows === 0) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }

  delete(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM employees WHERE id = ?', [id], (error: any, result: any) => {
        if (error) {
          reject(error);
          return;
        }
        if (result.affectedRows === 0) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}

export default new UserRepository();
