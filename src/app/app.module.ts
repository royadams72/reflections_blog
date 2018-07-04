import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './routing/app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Components*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BlogpageComponent } from './components//blog/blogpage/blogpage.component';
import { ErrorComponent } from './components/errors/error.component';
import { LoginComponent } from './components/login/login.component';
// import { AlertComponent } from './components/alert/alert.component';
/*Services*/
import { ErrorService } from './components//errors/error.service';
import { TokenInterceptor } from './services/token.interceptor';
import { BlogsService } from './services/blogs.service';
import { AuthService } from './services/auth.service';
import { IsloggedinGuard } from './routing/isloggedin.guard';
import { AlertService } from './components/alert/alert.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


import { BlogModule } from './components/blog/blog.module';
import { reducers, initialState } from './reducers/';




// export const reducers = {
//   blogs
//   };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogpageComponent,
    LoginComponent,
    ErrorComponent,
    // AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BlogModule,
    StoreModule.forRoot(reducers, {initialState}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot([])
  
  ],
  providers: [
    BlogsService,
    AuthService,
    IsloggedinGuard,
    ErrorService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
