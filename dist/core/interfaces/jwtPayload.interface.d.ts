export interface JwtPayload {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    mob: string;
    roles?: string[];
}
