import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';

import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { HomeComponent } from './layout/home/home.component';
import { routing } from './app.routing';

// import HttpService from './services/http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ErrorInterceptor } from './services/error.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator'; // Here

// import JwtInterceptor from './services/jwt.interceptor';
import { BundlesModule } from './admin/bundles/bundles.module';
import { TopbarModule } from './layout/topbar/topbar.module';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    TopbarModule,
    BundlesModule,
    BrowserAnimationsModule,
    SidebarModule,
    PanelMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // HttpService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
