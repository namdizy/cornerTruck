import { Directive } from '@angular/core';

/*
  Generated class for the InfoWindow directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[info-window]' // Attribute selector
})
export class InfoWindow {

  constructor() {
    console.log('Hello InfoWindow Directive');
  }

}
