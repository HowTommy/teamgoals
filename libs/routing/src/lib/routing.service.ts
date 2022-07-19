export interface RoutingService {
    navToLogIn(targetUrl?: string): Promise<void>;
}

export const ROUTING_SERVICE_TOKEN = 'ROUTING_SERVICE_TOKEN';
