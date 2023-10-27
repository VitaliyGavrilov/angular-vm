import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComp } from './comp/product/product.comp';
import {HttpClientModule} from '@angular/common/http'
import { GlobalErrorComponent } from './comp/product/global-error/global-error.comp';

@NgModule({
  declarations: [
    AppComponent,
    ProductComp,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
