import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { LoginComponent } from './pages/backend/login/login.component';
import { MemberManageComponent } from './pages/backend/member-manage/member-manage.component';
import { ProductComponent } from './pages/backend/product/product.component';
import { RegisterComponent } from './pages/backend/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path:'backend',
    component:BackendLayoutComponent,
    children: [
      {
        path:'login',
        component:LoginComponent
      },

      {
        path:'dashboard',
        component: DashboardComponent,
      },
      
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path:'product',
        component: ProductComponent,
      }
      ,
      {
        path:'register',
        component: RegisterComponent,
      },
      {
        path:'member',
        component: MemberManageComponent,
      }
    ]
  },
  {
    path:'',
    component: FrontendLayoutComponent,
    children: 
    [
      {
        path:'home',
        component: HomeComponent,
      },
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      
    ]
  },
  {
    path: '404', component: PagenotfoundComponent,
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
