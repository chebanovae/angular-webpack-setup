import './polyfills.ts';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from './app/app.module.ngfactory';
enableProdMode();
//noinspection TypeScriptValidateTypes
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
