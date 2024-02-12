import { Component, Input } from '@angular/core';

@Component({
  selector: 'meow-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input({ required: true })
  public phoneNumber!: string;
}
