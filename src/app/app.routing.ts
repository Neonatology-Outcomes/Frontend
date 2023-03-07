import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './layout/home/home.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';
// import { AuthGuard } from './services/auth.guard';
import BundlesComponent from './admin/bundles/bundles.component';

export const routes: Routes = [
  {
    path: '',
    component: BundlesComponent,
    loadChildren: () => import('./admin/bundles/bundles.module').then(x => x.BundlesModule),
    // canActivate: [AuthGuard],
  },
];
// ignore @tslint
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
