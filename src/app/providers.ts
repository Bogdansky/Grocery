import { InjectionToken } from "@angular/core";

import config from './config'

export const configToken = new InjectionToken('config-token');
export const configProvider = { provide: configToken, useValue: config };