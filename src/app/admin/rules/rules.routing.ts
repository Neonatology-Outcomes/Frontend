import { Routes, RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import RulesComponent from './rules.component';

export const routes: Routes = [
  { path: '', component: RulesComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
