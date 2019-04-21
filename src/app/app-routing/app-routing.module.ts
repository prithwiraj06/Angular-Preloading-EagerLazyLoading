import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},    
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'employees', loadChildren: '../employee/module/employee.module#EmployeeModule'},
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
