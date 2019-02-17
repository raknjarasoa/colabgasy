import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig: any;

  public init(): Promise<any> {
    return from(
      fetch('/assets/config/config.json').then(function(response) {
        return response.json();
      })
    )
      .pipe(
        map((appConfig) => {
          this.appConfig = appConfig;
          window.appConfig = appConfig;
          return appConfig;
        })
      )
      .toPromise();
  }

  getConfig() {
    return this.appConfig;
  }
}
