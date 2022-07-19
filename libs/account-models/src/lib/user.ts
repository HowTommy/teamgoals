export interface User {
    token: string | null;
    firstName: string;
    lastName: string;
    email: string;
    hashedPassword: string | null;

    creationDate: Date | null;
    modificationDate: Date | null;
    lastLoginDate: Date | null;
}
