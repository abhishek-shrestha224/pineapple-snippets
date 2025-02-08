import { Get, JsonController, Param } from "routing-controllers";
import { Inject, Service } from "typedi";

import { AuthService } from "../services/AuthService";

@Service()
@JsonController("/auth")
export class AuthController {
    constructor(@Inject() private authService: AuthService) {}
    @Get("/")
    async getAll() {
        return this.authService.getAllUsers();
    }
    @Get("/:username")
    async getById(@Param("username") username: string) {
        return this.authService.getUserByUsername(username);
    }
}
