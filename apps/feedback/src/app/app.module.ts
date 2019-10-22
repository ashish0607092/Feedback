import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './common/material/material.module';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent,
    HeaderComponent],
  imports: [BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgxsModule.forRoot([
    ]),
    NgxsRouterPluginModule.forRoot(),
    HttpClientModule,
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
