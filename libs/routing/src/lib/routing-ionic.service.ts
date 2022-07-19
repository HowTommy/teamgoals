import { Injectable } from "@angular/core";
import { RoutingService } from "./routing.service";
import { Router } from "@angular/router";

const SIGN_IN_URL = '/sign-in'

@Injectable()
export class RoutingIonicService implements RoutingService {

    constructor(protected readonly router: Router) {
    }

    async navToLogIn(targetUrl?: string): Promise<void> {
        await this.router.navigate([SIGN_IN_URL], { queryParams: { targetUrl } });
    }
}
