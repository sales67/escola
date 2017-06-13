import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

// por último la aplicación a leída desde el módulo raíz, llamado app por convenio
import { AppModule } from './app/app.module';

// condiciones para ejecutar en modo desarrollo o producción
if (environment.production) {
  enableProdMode();
}

// arranque de la aplicación invocando al módulo raíz
platformBrowserDynamic().bootstrapModule(AppModule);
