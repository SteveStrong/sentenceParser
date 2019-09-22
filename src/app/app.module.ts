import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpBufferComponent } from './sp-buffer/sp-buffer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpBufferComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
