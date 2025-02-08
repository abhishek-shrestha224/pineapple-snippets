import { Service } from "typedi";

@Service()
export class AuthService {
    async getAllUsers() {
        return [{ id: 1, username: "abhishek224", name: "Abhishek Shrestha" }];
    }

    async getUserByUsername(username: string) {
        return [{ id: 1, username: username, name: "Abhishek Shrestha" }];
    }
}
