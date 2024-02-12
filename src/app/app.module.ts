import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyboardModule } from './keyboard/keyboard.module';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KeyboardModule, DisplayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
