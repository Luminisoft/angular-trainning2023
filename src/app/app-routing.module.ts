import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'404', component:NotFound404Component},
  {path:'users',component:UsersListComponent},
  {path:'**', redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
