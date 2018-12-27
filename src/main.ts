import { Kinvey } from 'kinvey-angular2-sdk';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { kinveyKeys } from './keys';

if (environment.production) {
  enableProdMode();
}

Kinvey.init(kinveyKeys);

Kinvey.ping()
  .then((response) => {
    console.log(`version: ${response.version} ${response.kinvey}`);
  })
  .catch((error) => {
    console.log(`Kinvey Ping Failed. Response: ${error.description}`);
  });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
