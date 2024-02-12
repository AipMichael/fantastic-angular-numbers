import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'meow-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {
  public digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  @Output()
  public keyClick = new EventEmitter<number>();

  onKeyClick = (digit: number) => {
    this.keyClick.emit(digit);
  };
}
