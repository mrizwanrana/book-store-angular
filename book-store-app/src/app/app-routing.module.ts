import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoudComponent } from './shared/components/not-foud/not-foud.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {
    path:'auth', 
    component: AuthComponent, 
    loadChildren:()=> import('./auth/auth.module').then(x=>x.AuthModule)
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
