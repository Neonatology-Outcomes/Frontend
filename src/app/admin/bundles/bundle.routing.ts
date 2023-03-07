import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import BundlesComponent from './bundles.component';

export const routes: Routes = [
  { path: '', component: BundlesComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
