import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoudComponent } from './shared/components/not-foud/not-foud.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './books/books.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { HomeComponent } from './public-components/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'about-us', component: AboutUsComponent},
  {path:'how-it-works', component: HowItWorksComponent},

  {
    path:'auth', 
    component: AuthComponent, 
    loadChildren:()=> import('./auth/auth.module').then(x=>x.AuthModule)
  },
  {
    path:'books', 
    component: BooksComponent, 
    loadChildren:()=> import('./books/books.module').then(x=>x.BooksModule)
  },
  {
    path:'user/:userId', 
    component: UserComponent, 
    loadChildren:()=> import('./user/user.module').then(x=>x.UserModule)
  },
  {path:'**', component: NotFoudComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
