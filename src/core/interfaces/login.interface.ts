
export interface UserLogin extends Document {
    email: string;
    password: string;
    comparePassword(enteredPassword: string): Promise<boolean>;
}