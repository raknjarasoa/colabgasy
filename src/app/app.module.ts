import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppConfigService } from './shared/services/app-config.service';

export function configurationInit(config: AppConfigService) {
  return () => config.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    CoreModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: configurationInit,
    //   deps: [AppConfigService],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
