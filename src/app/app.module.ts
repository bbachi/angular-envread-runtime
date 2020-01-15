import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AppService } from './app.service'

export function init_app(appService: AppService) {
  return () => appService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: init_app, 
      deps: [ AppService ], 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
