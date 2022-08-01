import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';

// SAMPLE
// import { NonAuthorizedGuard } from './auth/guards/non-authorized.guard';

// const routes: Routes = [
//   { 
//     path: 'login', 
//     loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
//     canActivate: [NonAuthorizedGuard] 
//   },
//   { 
//     path: 'registration', 
//     loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule),
//     canActivate: [NonAuthorizedGuard] 
//   },
//   {
//     path: 'courses',
//     loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
//   },
//   { path: '', redirectTo: '/courses', pathMatch: 'full' },
//   { path: '**', redirectTo: '/courses' }
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }