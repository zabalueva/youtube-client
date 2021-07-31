import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import ComponentsModule from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }
