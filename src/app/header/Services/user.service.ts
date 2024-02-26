import { User } from "../Models/User";
export class UserService {
  users: User[] = [
    new User("Steve Smith", "Male", "Monthly", "Active"),
    new User("Shahid Afridi", "Male", "Yearly", "Active"),
    new User("Muhammad Amir", "Male", "Daily", "Active"),
  ];

  getAllUsers() {
    return this.users;
  }
  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
  }
}
