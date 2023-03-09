import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './layout/home/home.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';
// import { AuthGuard } from './services/auth.guard';
import RulesComponent from './admin/rules/rules.component';

export const routes: Routes = [
  {
    path: '',
    component: RulesComponent,
    loadChildren: () => import('./admin/rules/rules.module').then(x => x.RulesModule),
    // canActivate: [AuthGuard],
  },
];
// ignore @tslint
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
