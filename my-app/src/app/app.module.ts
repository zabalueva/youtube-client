import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* import { AppRoutingModule } from './app-routing.module'; */
import AppComponent from './app.component';
import ComponentsModule from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    /* AppRoutingModule, */
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line import/prefer-default-export
export class AppModule { }
