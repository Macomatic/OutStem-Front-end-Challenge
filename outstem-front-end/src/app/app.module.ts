import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Goal123Component } from './goal123/goal123.component';
import { HttpClientModule } from '@angular/common/http';
import { Goal456Component } from './goal456/goal456.component';


@NgModule({
  declarations: [
    AppComponent,
    Goal123Component,
    Goal456Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
