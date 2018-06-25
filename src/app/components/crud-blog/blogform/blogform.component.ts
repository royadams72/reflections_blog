import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Blog } from '../../../models/blog';
import { BlogUIState } from '../store/reducers/crud-blog.reducer';



@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  @Input() selectedBlog:BlogUIState
  @Input() blogAction:string;
  // crudTest$:Observable<crudBlogState>
  constructor() {

    // this.state = 'CREATING';
    this.formValid = false;
    this.success = false;
  }
  ngOnInit() {
    this.initForm();
  }
  ngOnChanges(){
    console.log(this.blogAction)
    console.log(this.crudBlogForm)
    this.crudBlogForm.patchValue({
      'title':this.selectedBlog[0].title,
      'vidUrl': this.selectedBlog[0].vidUrl,
      'script': this.selectedBlog[0].script,
      '_id': this.selectedBlog[0]._id,
      'index': this.selectedBlog[0].index
    })
    
    console.log(this.crudBlogForm.get('title').value)
  }
  private initForm() {
    // let items = [];
    this.crudBlogForm = new FormGroup({
      'title': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'vidUrl': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(1)])),
      'script': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      '_id': new FormControl(null),
      'index': new FormControl(null)
      
    });
 
  }


  onSubmitForm(action) {
    let form = this.crudBlogForm
    let title = form.get('title');
    let vidUrl = form.get('vidUrl');
    let script = form.get('script');
    let _id = form.get('_id');
    let index = form.get('index');
    let conn: Subscription;
    // action === 'CREATING' ? vidID = null : vidID = this._id;
    let blog: Blog = { _id: _id.value, title: title.value, vidUrl: vidUrl.value, script: script.value }
    console.log(blog)
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
