import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'meow-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css'],
})
export class KeyComponent {
  @Input({ required: true })
  public digit!: number;

  @Output()
  public keyClick = new EventEmitter();

  public onClick = () => {
    this.keyClick.emit();
  };
}
