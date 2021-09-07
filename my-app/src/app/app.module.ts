import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import AppComponent from './app.component';
import { YoutubeModule } from './youtube/youtube.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ApiInterInterceptor } from './youtube/interceptors/api-inter.interceptor';
import { initialAppState } from './redux/state.model';
import { reducersMap } from './redux/reducers/reducersMap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
    YoutubeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducersMap, {
      initialState: initialAppState,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
