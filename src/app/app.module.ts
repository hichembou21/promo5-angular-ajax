import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AjaxService, LocalStorageService } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ajax:AjaxService, private localStor : LocalStorageService) {
    // ajax.getUser(1).subscribe(value => console.log(value));
    console.log(localStor.getAll()[0].constructor.name);
  }

 }
