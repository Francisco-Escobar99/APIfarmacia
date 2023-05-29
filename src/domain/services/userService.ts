import UserRepository from '../repositories/userRepository';
import { User } from '../models/user';

class UserService {
  getAllUsers(): Promise<User[]> {
    return UserRepository.getAll();
  }

  getUserById(id: number): Promise<User | null> {
    return UserRepository.getById(id);
  }

  createUser(user: User): Promise<number> {
    return UserRepository.create(user);
  }

  updateUser(id: number, user: User): Promise<boolean> {
    return UserRepository.update(id, user);
  }

  deleteUser(id: number): Promise<boolean> {
    return UserRepository.delete(id);
  }
}

export default new UserService();
