import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { CateAddComponent } from './pages/backend/cate-add/cate-add.component';
import { CateManageComponent } from './pages/backend/cate-manage/cate-manage.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { LoginComponent } from './pages/backend/login/login.component';
import { MemberManageComponent } from './pages/backend/member-manage/member-manage.component';
import { ProductAddComponent } from './pages/backend/product-add/product-add.component';
import { ProductManageComponent } from './pages/backend/product-manage/product-manage.component';
import { ProductUpdateComponent } from './pages/backend/product-update/product-update.component';
import { ProductComponent } from './pages/backend/product/product.component';
import { RegisterComponent } from './pages/backend/register/register.component';
import { UpdateMemberComponent } from './pages/backend/update-member/update-member.component';
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
      },
      {
        path:'productmanage',
        component: ProductManageComponent,
      },
      {
        path:'addproduct',
        component: ProductAddComponent,
      },
      {
        path:'updateproduct',
        component: ProductUpdateComponent
      },
      {
        path:"category",
        component: CateManageComponent
      },
      {
        path:"cateadd",
        component: CateAddComponent
      },
      {
        path:"member/:id",
        component: UpdateMemberComponent
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
