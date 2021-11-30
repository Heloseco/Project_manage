import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { FooterFrontendComponent } from './shared/footer-frontend/footer-frontend.component';
import { HeaderFrontendComponent } from './shared/header-frontend/header-frontend.component';
import { FooterBackendComponent } from './shared/footer-backend/footer-backend.component';
import { HeaderBackendComponent } from './shared/header-backend/header-backend.component';
import { SidebarBackendComponent } from './shared/sidebar-backend/sidebar-backend.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { ProductComponent } from './pages/backend/product/product.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './pages/backend/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/backend/register/register.component';
import { MemberManageComponent } from './pages/backend/member-manage/member-manage.component';
import { UpdateMemberComponent } from './pages/backend/update-member/update-member.component';
import { ProductManageComponent } from './pages/backend/product-manage/product-manage.component';
import { ProductAddComponent } from './pages/backend/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/backend/product-update/product-update.component';
import { CateManageComponent } from './pages/backend/cate-manage/cate-manage.component';
import { CateAddComponent } from './pages/backend/cate-add/cate-add.component';
@NgModule({
  declarations: [
    AppComponent,
    BackendLayoutComponent,
    FrontendLayoutComponent,
    FooterFrontendComponent,
    HeaderFrontendComponent,
    FooterBackendComponent,
    HeaderBackendComponent,
    SidebarBackendComponent,
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    MemberManageComponent,
    UpdateMemberComponent,
    ProductManageComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    CateManageComponent,
    CateAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
