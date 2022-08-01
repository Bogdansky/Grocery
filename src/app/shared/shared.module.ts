import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlService } from './services/url.service';

const services = [UrlService];

@NgModule({
  providers: [...services],
  declarations: [
    
  ],
  imports: [
    
  ],
  exports: [
    
  ]
})
export class SharedModule { }