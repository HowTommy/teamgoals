import { InjectionToken } from "@angular/core";
import { User } from "@teamgoals/account-models";

export interface AccountStorageService {
    getUser(): Promise<User | null>;
    saveUser(user: User): Promise<void>;
}

export const ACCOUNT_STORAGE_SERVICE_TOKEN = 'ACCOUNT_STORAGE_SERVICE_TOKEN';
