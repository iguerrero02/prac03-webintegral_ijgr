// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
//   },
//   { path: '**', redirectTo: 'home' } // Redireccionar cualquier otra ruta a 'home'
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  { path: '**', redirectTo: 'login' } // Redireccionar cualquier otra ruta a 'home'
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
