import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthenticationComponent } from './security/authentication/authentication.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'products', loadChildren: './products/products.module#ProductsModule' },
      { path: 'shops', loadChildren: './shops/shops.module#ShopsModule' },
      { path: 'files', loadChildren: './files/files.module#FilesModule' }
    ]
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: '', component: NbAuthComponent,
    children: [
      { path: 'login', component: AuthenticationComponent },
    ]
  },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
