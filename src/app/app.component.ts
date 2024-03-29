import { Component } from '@angular/core';

@Component({
  selector: 'meow-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public phoneNumber = '';

  public onKeyClick = (digit: number) => {
    this.phoneNumber = `${this.phoneNumber}${digit}`;
  };
}
