import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	  BrowserModule,
	  BrowserAnimationsModule,
	  AppMaterialModule,
	  HttpClientModule,
	  NgxPaginationModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
