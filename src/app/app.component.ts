// Los componentes son los bloques de construcción de Angular 2 que representan regiones de la pantalla

// Las aplicaciones se definen como árboles de componentes

// Nuestra aplicación es un árbol que tiene una raíz, habitualmente llamado app y que es común a cualquier desarrollo


// Cada componente a su vez está formado por tres partes: 

// 1. La vista: es el código que se renderizará para los usuarios. Esta plantilla estará en un fichero de extensión .html (app.component.html)

// 2. La clase controladora: En ES6 usaremos clases para declarar los controladores que exponen datos y funcionalidad a la vista

// 3. Metadata: Se declara como un decorador, una función especial de TypeScript, que recibe un objeto de configuración. Esto acompaña al controlador en un fichero de extensión .ts (app.component.ts)

import { Component } from '@angular/core';

// Función decoradora que registra un componente
// Lo que hace es asociar al controlador una plantilla HTML app.component.html y un selector para ser invocado desde otra vista <app-root></app-root>.
@Component({
  selector: 'app-root',                 // elemento html consumidor
  templateUrl: './app.component.html',  // ruta relativa a la vista
  styleUrls: ['./app.component.css']    // potencialmente múltiples hojas de estilo
})
// Esta clase es todo lo que se exporta en este fichero
// y esto se importará en app.module.ts para ser incorporado al módulo raíz
export class AppComponent {
    // las propiedades de la clase representan el modelo de datos
    // son accesibles desde la vista
    title = 'Escola Otaku';
}

