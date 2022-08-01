import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { configProvider } from './providers';
import { ProductsService } from './services/products.service';

import { AppComponent } from './app.component';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    configProvider,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
