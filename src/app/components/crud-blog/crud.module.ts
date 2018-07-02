import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { CrudBlogComponent } from './crud-blog.component';
import { BlogFormComponent } from './blogform/blogform.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { reducers } from "./store/reducers/"
import { AlertModule, AccordionModule } from 'ngx-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CrudBlogEffects } from './store/effects/crud-blog.effects';


// export const reducers = {
//   crud:reducer
// };
const appRoutes: Routes = [
  { path: "crudblog", component: CrudBlogComponent }
]
@NgModule({
  declarations: [
    CrudListComponent,
    BlogFormComponent,
    CrudBlogComponent
  ],
  imports: [
    AlertModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(appRoutes),
    StoreModule.forFeature('crudState', reducers),
    EffectsModule.forFeature([CrudBlogEffects])
  ],

  exports: [
    CrudListComponent,
    BlogFormComponent,
    CrudBlogComponent
  ]
})
export class CrudModule { }
