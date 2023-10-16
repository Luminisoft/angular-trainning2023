import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ProductsComponent } from './components/products/list/products.component';
import { ViewProductDetailsComponent } from './components/products/view-product-details/view-product-details.component';
import { LoginComponent } from './pages/login/login.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'404', component:NotFound404Component},
  {path:'users',component:UsersListComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:id', component:ViewProductDetailsComponent},
  // {path:'auth/signup',component:RegisterComponent}
  {path:'auth/signin',component:LoginComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'**', redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
