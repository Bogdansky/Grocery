import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UrlService } from '../shared/services/url.service';
import { Result } from '../models/common/http-result.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private urlService: UrlService,
    private http: HttpClient
  ) { }

  scanProduct(productCode: string): Observable<Result<null>> {
    const url = `${this.urlService.getProductsMethodUrl("scan")}/${productCode}`;

    return this.http.get<Result<null>>(url).pipe(map(resp => resp));;
  }

}
