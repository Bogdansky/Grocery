import { Injectable, Inject } from '@angular/core';
import { configToken } from 'src/app/providers';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    constructor(@Inject(configToken) private config: any) { }

    getProductsMethodUrl(method: string) {
        const root = this.config.urls.root;
        const methodUrl = this.getSectionMethodUrl("products", method);

        return [root, methodUrl].join('/');
    }

    private getSectionMethodUrl(sectionName: string, method: string): string {
        return this.config.urls[sectionName][method];
    }
}