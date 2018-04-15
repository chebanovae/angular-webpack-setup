import '../polyfills';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app/app.module.ngfactory';
import { environment } from './environments/environment';

enableProdMode();
//noinspection TypeScriptValidateTypes
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);