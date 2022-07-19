import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ACCOUNT_STORAGE_SERVICE_TOKEN, AccountStorageService } from "../services/account-storage.service";
import { ROUTING_SERVICE_TOKEN, RoutingService } from "@teamgoals/routing";

@Injectable({
    providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
    constructor(@Inject(ACCOUNT_STORAGE_SERVICE_TOKEN)
                private readonly accountStorageService: AccountStorageService,
                @Inject(ROUTING_SERVICE_TOKEN)
                private readonly routingService: RoutingService) {

    }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const user = await this.accountStorageService.getUser();

        if (!user) {
            await this.routingService.navToLogIn();
            return false;
        }

        return true;
    }
}
