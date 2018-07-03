// import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { CrudBlogComponent } from './components/crud-blog/crud-blog.component';
import { HomeComponent } from '../components/home/home.component';
import { BlogpageComponent } from '../components/blog/blogpage/blogpage.component';
import { LoginComponent } from '../components/login/login.component';
import { IsloggedinGuard } from '../routing/isloggedin.guard';
// './auth/auth.module#AuthModule'
const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "crudblog", canActivate: [IsloggedinGuard], loadChildren: './components/blog/blog.module#BlogModule' },
  { path: "blog/:id", component: BlogpageComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: HomeComponent },
]

export const routing = RouterModule.forRoot(appRoutes);
