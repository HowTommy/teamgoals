import { User } from "@teamgoals/account-models";

export interface AccountStorageService {
    getUser(): Promise<User | null>;
    saveUser(user: User): Promise<void>;
}
