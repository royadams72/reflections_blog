import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { BlogsService } from '../../../services/blogs.service';
import { ErrorService } from '../../errors/error.service';
import { Blog } from '../../../models/blog';
import { Store } from '@ngrx/store';
import { CrudBlogState } from '../store/reducers/crud-blog.reducer';
import { getSelectedBlog } from '../store/selectors/crud.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogFormComponent implements OnInit {
  public state: string;
  public crudBlogForm: FormGroup;
  private formValid: boolean;
  public success: boolean;
  private successMsg: String;
  public _id: String;
  private connArray: Array<Subscription> = [];
  private index: number;
  @Input() selectedBlog:any
  
  // crudTest$:Observable<crudBlogState>
  constructor(private blogsService: BlogsService,
              private errorService: ErrorService
              ) {

    this.state = 'CREATING';
    this.formValid = false;
    this.success = false;
  }
  ngOnInit() {
    this.initForm();
    // let conn = this.blogsService.populateForm
    //   .subscribe((data) => {
    //     if (data) {
    //       this.state = 'UPDATING';
    //       let blog: Blog = data.blog;
    //       this.crudBlogForm.setValue({
    //         title: blog.title,
    //         vidUrl: blog.vidUrl,
    //         script: blog.script,
    //         _id: blog._id,
    //         index: data.index
    //       });
    //     }
    //     this.connArray.push(conn);

    //   })
  }
  private initForm() {
    // let items = [];
    this.crudBlogForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'vidUrl': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(1)])),
      'script': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      '_id': new FormControl(null)
      // 'index': new FormControl(null)
      
    });
    this.onChanges()
    // this.addItemFields();
  }

  onChanges(): void {
    console.log(this.crudBlogForm.get('_id').value)
    this.crudBlogForm.get('vidUrl').valueChanges.subscribe(val => {
      console.log(val)
    });
  }
  onSubmitForm(action) {
    let form = this.crudBlogForm
    let title = form.get('title');
    let vidUrl = form.get('vidUrl');
    let script = form.get('script');
    let _id = form.get('_id');

    let conn: Subscription;
    // action === 'CREATING' ? vidID = null : vidID = this._id;
    let blog: Blog = { _id: _id.value, title: title.value, vidUrl: vidUrl.value, script: script.value }
    // if (action === 'CREATING') {
    //   conn = this.blogsService.addBlog(blog)
    //     .subscribe(data => {
    //       if (data) {
    //         this.success = true;
    //         this.successMsg = "Your Blog has been uploaded";
    //       }
    //     },
    //     (err: HttpErrorResponse) => {
    //       this.errorService.handleError(err);
    //     });
    // } else if (action === 'UPDATING') {
    //   // console.log(blog)
    //   conn = this.blogsService.updateBlog(blog, index)
    //     .subscribe(data => {
    //       if (data) {
    //         this.success = true;
    //         this.successMsg = "Your Blog has been updated";
    //       }
    //     },
    //     (err: HttpErrorResponse) => {
    //       this.errorService.handleError(err);
    //     });
    // } else if (action === 'DELETING') {
    //   // console.log(blog)
    //   conn = this.blogsService.deleteBlog(blog, index)
    //     .subscribe(data => {
    //       if (data) {
    //         this.success = true;
    //         this.successMsg = "Your Blog has been deleted";
    //       }
    //     },
    //     (err: HttpErrorResponse) => {
    //       this.errorService.handleError(err);
    //     });
    // }
    // this.connArray.push(conn);
    // form.reset();
    // this.state = 'CREATING';
  }
  ngOnDestroy() {
    this.connArray.map((conn) => {
      conn.unsubscribe();
    })
    // this.
  }

}
