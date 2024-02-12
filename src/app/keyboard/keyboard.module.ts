import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  declarations: [KeyboardComponent, KeyComponent],
  imports: [CommonModule],
  exports: [KeyboardComponent],
})
export class KeyboardModule {}
