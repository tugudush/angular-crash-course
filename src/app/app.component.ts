import { Component } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'event-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Local Events App';
}