import { User } from "src/core/schemas/user.schema";


declare global {
    namespace Express {
        interface Request {
            user?: User; // or the specific type for your decoded user payload
        }
    }
}