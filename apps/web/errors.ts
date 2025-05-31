import { AuthError } from "next-auth";
export class CustomAuthError extends AuthError {
    constructor(message: string) {
        super(message);
        this.name = "CustomAuthError";
        this.message = message;
    }
}
