import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ACCOUNT_STORAGE_SERVICE_TOKEN, AccountStorageIonicService } from "@teamgoals/account-feature";
import { ROUTING_SERVICE_TOKEN, RoutingIonicService } from "@teamgoals/routing";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      { provide: ACCOUNT_STORAGE_SERVICE_TOKEN, useClass: AccountStorageIonicService },
      { provide: ROUTING_SERVICE_TOKEN, useClass: RoutingIonicService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
