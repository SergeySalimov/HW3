import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDisabled = false;
  title = 'test-app';

  constructor() {
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000)
  }
}
