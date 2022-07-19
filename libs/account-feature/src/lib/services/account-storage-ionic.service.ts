import { Injectable } from "@angular/core";
import { AccountStorageService } from "./account-storage.service";
import { User } from "@teamgoals/account-models";
import { Storage } from '@ionic/storage-angular';

const USER_STORAGE_KEY = 'user';

@Injectable()
export class AccountStorageIonicService implements AccountStorageService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
        this.init().then().catch(error => console.error('could not initialize storage for account', error));
    }

    async init() {
        this._storage = await this.storage.create();
    }

    async getUser(): Promise<User | null> {
        return this._storage?.get(USER_STORAGE_KEY);
    }

    async saveUser(user: User): Promise<void> {
        return this._storage?.set(USER_STORAGE_KEY, user);
    }
}
